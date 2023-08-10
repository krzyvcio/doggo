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
}
