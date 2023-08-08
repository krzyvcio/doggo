import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { PrismaService } from '../prisma/prisma.service';

import * as breedJson from 'data/breeds.json';

@Injectable()
export class BreedService {
    constructor(private prisma: PrismaService) {}

    async create(createBreedDto: CreateBreedDto) {
        return await this.prisma.breed.create({
            data: createBreedDto,
        });
    }

    async findAll(
        limit?: number,
        offset?: number,
    ) {
        return await this.prisma.breed.findMany({
            take: limit,
            skip: offset,
        });
    }

    async findOne(id: number) {
        return await this.prisma.breed.findUnique(
            {
                where: {
                    id: id,
                },
            },
        );
    }

    async update(
        id: number,
        updateBreedDto: UpdateBreedDto,
    ) {
        return await this.prisma.breed.update({
            where: {
                id: id,
            },
            data: updateBreedDto,
        });
    }

    async remove(id: number) {
        return await this.prisma.breed.delete({
            where: {
                id: id,
            },
        });
    }

    async seed() {
        const breeds = breedJson.map((breed) => {
            return {
                name: breed.polish,
                englishName: breed.english,
            };
        });

        let i = 0;

        for await (const breed of breeds) {
            const breedExists =
                await this.prisma.breed.findFirst(
                    {
                        where: {
                            name: breed.name,
                        },
                    },
                );

            if (breedExists) {
                console.log(
                    'breedExists',
                    breed.name,
                );
                continue;
            }

            await this.prisma.breed.create({
                data: breed,
            });
            i++;
        }
        return i;
    }
}
