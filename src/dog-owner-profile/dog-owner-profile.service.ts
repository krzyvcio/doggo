import { Injectable } from '@nestjs/common';
import { CreateDogOwnerProfileDto } from './dto/create-dog-owner-profile.dto';
import { UpdateDogOwnerProfileDto } from './dto/update-dog-owner-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DogOwnerProfileService {
    constructor(private prisma: PrismaService) {}

    async create(
        createDogOwnerProfileDto: CreateDogOwnerProfileDto,
    ) {
        //create dogOwnerProfile
        if (createDogOwnerProfileDto.userId) {
            const dogOwner =
                await this.prisma.dogOwnerProfile.create(
                    {
                        data: {
                            userId: createDogOwnerProfileDto.userId,
                        },
                    },
                );

            return dogOwner;
        } else {
            throw new Error('No userId provided');
        }
    }

    async findAll() {
        const dogOwnerProfiles =
            await this.prisma.dogOwnerProfile.findMany(
                {
                    include: {
                        user: true,
                    },
                },
            );

        return dogOwnerProfiles;
    }

    async findOne(id: number) {
        return await this.prisma.dogOwnerProfile.findUnique(
            {
                where: {
                    id,
                },
            },
        );
    }

    async findByUserId(userId: number) {
        return await this.prisma.dogOwnerProfile.findUnique(
            {
                where: {
                    userId,
                },
            },
        );
    }

    async update(
        id: number,
        updateDogOwnerProfileDto: UpdateDogOwnerProfileDto,
    ) {
        const dogOwnerProfile =
            await this.prisma.dogOwnerProfile.update(
                {
                    where: {
                        id,
                    },
                    data: {
                        ...updateDogOwnerProfileDto,
                    },
                },
            );
        return dogOwnerProfile;
    }

    async remove(id: number) {
        const dogOwnerProfile =
            await this.prisma.dogOwnerProfile.delete(
                {
                    where: {
                        id,
                    },
                },
            );

        return dogOwnerProfile;
    }
}
