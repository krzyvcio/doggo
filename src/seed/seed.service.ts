import { Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';

@Injectable()
export class SeedService {
    constructor(private prisma: PrismaService) { }

    public async clearDatabase(): Promise<void> { }

    public async seedAdmin(): Promise<void> {
        try {
            let user =
                await this.prisma.user.findFirst({
                    where: {
                        email: 'admin@doggo.pl',
                    },
                });

            const password = await argon.hash(
                'password',
            );

            if (user) {
                await this.prisma.user.delete({
                    where: {
                        email: 'admin@doggo.pl',
                    },
                });
            } else {
                console.log(
                    'Admin user already exists. Deleting.',
                );
            }

            user =
                await this.prisma.user.findFirst({
                    where: {
                        email: 'admin@doggo.pl',
                    },
                });
            if (!user) {
                console.log(
                    'Creating new admin user...',
                );
                const newUser =
                    await this.prisma.user.create(
                        {
                            data: {
                                email: 'admin@doggo.pl',
                                password,
                                roles: UserRole.Admin,
                            },
                        },
                    );
                console.log(
                    `Created new admin user: ${newUser.email}`,
                );
            }
        } catch (error) {
            console.error(
                'Error creating admin user:',
                error,
            );
        }
    }

    public async seedDogOwnerProfile(): Promise<void> {
        const numDogOwnerProfiles = 10; // Number of DogOwnerProfiles to create

        for (
            let i = 0;
            i < numDogOwnerProfiles;
            i++
        ) {
            const password = await argon.hash(
                'password',
            );

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
                        password,
                    },
                });

            await this.prisma.dogOwnerProfile.create(
                {
                    data: {
                        userId: user.id,
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
            const password = await argon.hash(
                'password',
            );

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
                        password,
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
