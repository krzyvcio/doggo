import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DogService {
    constructor(private prisma: PrismaService) {}
    async create(createDogDto: CreateDogDto) {
        const {
            userId,
            name,
            age,
            breedId,
            image,
        } = createDogDto;

        if (!userId)
            throw new Error(
                'User id is required',
            );

        if (!name)
            throw new Error('Name is required');

        const dogOwnerProfile =
            await this.prisma.dogOwnerProfile.findUnique(
                {
                    where: {
                        userId,
                    },
                    select: {
                        id: true,
                    },
                },
            );

        if (!dogOwnerProfile)
            throw new Error(
                'Dog owner profile not found',
            );

        if (dogOwnerProfile) {
            const dog =
                await this.prisma.dog.create({
                    data: {
                        dogOwnerProfileId:
                            dogOwnerProfile.id,
                        name,
                        age,
                        breedId,
                        image,
                    },
                });
            return dog;
        }
    }

    async findAll(limit?: number) {
        const dogs =
            await this.prisma.dog.findMany({
                take: limit,
            });

        return dogs;
    }

    async findOneMyDog(
        id: number,
        userId: number,
    ) {
        const dog =
            await this.prisma.dog.findUnique({
                where: {
                    id,
                },
            });

        if (!dog)
            throw new Error('Dog not found');

        const dogOwnerProfile =
            await this.prisma.dogOwnerProfile.findUnique(
                {
                    where: {
                        userId,
                    },
                },
            );

        if (dogOwnerProfile.userId !== userId)
            throw new Error(
                'You are not the owner of this dog',
            );

        return dog;
    }

    async findMyDogs(
        userId: number,
        limit?: number,
    ) {
        const dogOwnerProfile =
            await this.prisma.dogOwnerProfile.findUnique(
                {
                    where: {
                        userId,
                    },
                    select: {
                        id: true,
                    },
                },
            );

        if (!dogOwnerProfile)
            throw new Error(
                'Dog owner profile not found',
            );

        const dogs =
            await this.prisma.dog.findMany({
                where: {
                    dogOwnerProfileId:
                        dogOwnerProfile.id,
                },

                take: limit,
            });

        return dogs;
    }

    async findAllByUserId(
        userId: number,
        limit?: number,
    ) {
        const dogOwnerProfile =
            await this.prisma.dogOwnerProfile.findUnique(
                {
                    where: {
                        userId,
                    },
                    select: {
                        id: true,
                    },
                },
            );

        if (!dogOwnerProfile)
            throw new Error(
                'Dog owner profile not found',
            );

        const dogs =
            await this.prisma.dog.findMany({
                where: {
                    dogOwnerProfileId:
                        dogOwnerProfile.id,
                },

                take: limit,
            });

        return dogs;
    }

    async findOne(id: number) {
        const dog =
            await this.prisma.dog.findUnique({
                where: {
                    id,
                },
            });

        return dog;
    }

    async update(
        id: number,
        updateDogDto: UpdateDogDto,
    ) {
        const { name, age, breedId, image } =
            updateDogDto;

        const dog = await this.prisma.dog.update({
            where: {
                id,
            },
            data: {
                name,
                age,
                breedId,
                image,
            },
        });

        return dog;
    }

    async removeMyDog(
        id: number,
        userId: number,
    ) {
        const dog =
            await this.prisma.dog.findUnique({
                where: {
                    id,
                },
            });

        if (!dog)
            throw new Error('Dog not found');

        const dogOwnerProfile =
            await this.prisma.dogOwnerProfile.findUnique(
                {
                    where: {
                        userId,
                    },
                },
            );

        if (dogOwnerProfile.userId !== userId)
            throw new Error(
                'You are not the owner of this dog',
            );

        const deletedDog =
            await this.prisma.dog.delete({
                where: {
                    id,
                },
            });

        return deletedDog;
    }

    async updateMyDog(
        id: number,
        userId: number,
        updateDogDto: UpdateDogDto,
    ) {
        const { name, age, breedId, image } =
            updateDogDto;

        const dog =
            await this.prisma.dog.findUnique({
                where: {
                    id,
                },
            });

        if (!dog)
            throw new Error('Dog not found');

        const dogOwnerProfile =
            await this.prisma.dogOwnerProfile.findUnique(
                {
                    where: {
                        userId,
                    },
                },
            );

        if (dogOwnerProfile.userId !== userId)
            throw new Error(
                'You are not the owner of this dog',
            );

        const updatedDog =
            await this.prisma.dog.update({
                where: {
                    id,
                },
                data: {
                    name,
                    age,
                    breedId,
                    image,
                },
            });

        return updatedDog;
    }

    async remove(id: number) {
        const dog = await this.prisma.dog.delete({
            where: {
                id,
            },
        });

        return dog;
    }
}
