import { Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as faker from 'faker';


@Injectable()
export class SeedService {
    constructor(private prisma: PrismaService) { }

    public async seedAdmin(): Promise<void> {
        const user =
            await this.prisma.user.findFirst();
        if (!user) {
            await this.prisma.user.create({
                data: {
                    email: 'admin@doggo.pl',
                    firstName: 'admin',
                    lastName: 'admin',
                    roles: {
                        set: [UserRole.Admin],
                    },
                    password: 'admin',
                },
            });
        }
    }

    public async seedDogOwnerProfile(): Promise<void> {
        const numDogOwnerProfiles = 10; // Number of DogOwnerProfiles to create

        for (
            let i = 0;
            i < numDogOwnerProfiles;
            i++
        ) {
            const user =
                await this.prisma.user.create({
                    data: {
                        email: faker.internet.email(),
                        firstName:
                            faker.name.firstName(),
                        lastName:
                            faker.name.lastName(),
                        roles: {
                            set: [
                                UserRole.DogOwner,
                            ],
                        },
                        password: 'password', // Set a fixed password here
                    },
                });

            await this.prisma.dogOwnerProfile.create(
                {
                    data: {
                        userId: user.id,
                        address:
                            faker.address.streetAddress(),
                        // Add more fields as needed
                    },
                },
            );
        }
    }

    public async seedDogWalkerProfile(): Promise<void> {
        const numDogWalkerProfiles = 5; // Number of DogWalkerProfiles to create

        for (
            let i = 0;
            i < numDogWalkerProfiles;
            i++
        ) {
            const user =
                await this.prisma.user.create({
                    data: {
                        email: faker.internet.email(),
                        firstName:
                            faker.name.firstName(),
                        lastName:
                            faker.name.lastName(),
                        roles: {
                            set: [
                                UserRole.DogWalker,
                            ],
                        },
                        password: 'password', // Set a fixed password here
                    },
                });

            await this.prisma.dogWalkerProfile.create(
                {
                    data: {
                        userId: user.id,

                    },
                },
            );
        }
    }
}
