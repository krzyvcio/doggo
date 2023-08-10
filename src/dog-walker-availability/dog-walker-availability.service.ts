import { Injectable } from '@nestjs/common';
import { CreateDogWalkerAvailabilityDto } from './dto/create-dog-walker-availability.dto';
import { UpdateDogWalkerAvailabilityDto } from './dto/update-dog-walker-availability.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DogWalkerAvailabilityService {
    constructor(private prisma: PrismaService) {}
    async create(
        createDogWalkerAvailabilityDto: CreateDogWalkerAvailabilityDto,
    ) {
        //find if there is already an availability for that day
        const availability =
            await this.prisma.dogWalkerAvailability.findFirst(
                {
                    where: {
                        AND: [
                            {
                                dogWalkerProfileId:
                                    createDogWalkerAvailabilityDto.dogWalkerProfileId,
                            },
                            {
                                weekday:
                                    createDogWalkerAvailabilityDto.weekday,
                                startHour:
                                    createDogWalkerAvailabilityDto.startHour,
                                endHour:
                                    createDogWalkerAvailabilityDto.endHour,
                            },
                        ],
                    },
                },
            );

        if (availability) {
            throw new Error(
                'There is already an availability for that day',
            );
        }

        return await this.prisma.dogWalkerAvailability.create(
            {
                data: createDogWalkerAvailabilityDto,
            },
        );
    }

    async findAll(limit?: number) {
        return await this.prisma.dogWalkerAvailability.findMany(
            {
                take: limit || undefined,
            },
        );
    }

    async findOne(id: number) {
        return await this.prisma.dogWalkerAvailability.findUnique(
            {
                where: { id },
            },
        );
    }

    async update(
        id: number,
        updateDogWalkerAvailabilityDto: UpdateDogWalkerAvailabilityDto,
    ) {
        return await this.prisma.dogWalkerAvailability.update(
            {
                where: { id },

                data: updateDogWalkerAvailabilityDto,
            },
        );
    }

    async remove(id: number) {
        return await this.prisma.dogWalkerAvailability.delete(
            {
                where: { id },
            },
        );
    }

    async getDogWalkerAvailabilityByDogWalkerProfileId(
        dogWalkerProfileId: number,
    ) {
        return await this.prisma.dogWalkerAvailability.findMany(
            {
                where: {
                    dogWalkerProfileId,
                },
            },
        );
    }

    async getMyAvailability(userId: number) {
        //find property in user table dogWalkerProfileId
        const dogWalkerProfileId =
            await this.prisma.user.findUnique({
                where: {
                    id: userId,
                },
                select: {
                    dogWalkerProfile: {
                        select: {
                            id: true,
                        },
                    },
                },
            });
        //find availability by dogWalkerProfileId
        return await this.prisma.dogWalkerAvailability.findMany(
            {
                where: {
                    dogWalkerProfileId:
                        dogWalkerProfileId
                            .dogWalkerProfile.id,
                },
            },
        );
    }
}
