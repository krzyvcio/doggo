import { Injectable } from '@nestjs/common';
import { CreateDogWalkerProfileDto } from './dto/create-dog-walker-profile.dto';
import { UpdateDogWalkerProfileDto } from './dto/update-dog-walker-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DogWalkerProfileService {
    constructor(private prisma: PrismaService) {}

    async create(
        createDogWalkerProfileDto: CreateDogWalkerProfileDto,
    ) {
        //create dogWalkerProfile
        if (createDogWalkerProfileDto.userId) {
            const dogWalker =
                await this.prisma.dogWalkerProfile.create(
                    {
                        data: {
                            userId: createDogWalkerProfileDto.userId,
                        },
                    },
                );

            return dogWalker;
        }
    }

    async findAll() {
        const dogWalkerProfiles =
            await this.prisma.dogWalkerProfile.findMany(
                {
                    include: {
                        user: true,
                    },
                },
            );

        return dogWalkerProfiles;
    }

    async findOne(id: number) {
        return await this.prisma.dogWalkerProfile.findUnique(
            {
                where: {
                    id,
                },
            },
        );
    }

    async update(
        id: number,
        updateDogWalkerProfileDto: UpdateDogWalkerProfileDto,
    ) {
        return await this.prisma.dogWalkerProfile.update(
            {
                where: {
                    id,
                },
                data: {
                    ...updateDogWalkerProfileDto,
                },
            },
        );
    }

    async remove(id: number) {
        return await this.prisma.dogWalkerProfile.delete(
            {
                where: {
                    id,
                },
            },
        );
    }
}
