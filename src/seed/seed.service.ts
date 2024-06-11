import { Injectable } from '@nestjs/common';
import {
    UserRole,
    Weekday,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';
import { CreateDogDto } from '../dog/dto/create-dog.dto';
import { OfferStatus } from '@prisma/client';

@Injectable()
export class SeedService {
    constructor(private prisma: PrismaService) {}

    public async clearDatabase(): Promise<void> {}

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

    public async seedDogs(): Promise<void> {
        const numDogs = 100; // Number of dogs to create

        const breeds =
            await this.prisma.breed.findMany();
        const dogOwners =
            await this.prisma.dogOwnerProfile.findMany();

        for (let i = 0; i < numDogs; i++) {
            const randomBreedIndex = Math.floor(
                Math.random() * breeds.length,
            );
            const randomDogOwnerIndex =
                Math.floor(
                    Math.random() *
                        dogOwners.length,
                );

            const breed =
                breeds[randomBreedIndex];
            const dogOwner =
                dogOwners[randomDogOwnerIndex];

            const createDogDto: CreateDogDto = {
                userId: dogOwner.userId,
                name: faker.name.firstName(),
                breedId: breed.id,
                age:
                    Math.floor(
                        Math.random() * 15,
                    ) + 1, // Random age between 1 and 15
                image: faker.image.imageUrl(
                    400,
                    400,
                    'dog',
                    true,
                ),
            };

            const dog =
                await this.prisma.dog.create({
                    data: {
                        name: createDogDto.name,
                        age: createDogDto.age,
                        image: createDogDto.image,
                        Breed: {
                            connect: {
                                id: createDogDto.breedId,
                            },
                        },
                    },
                });

            await this.prisma.dogOwnerProfile.update(
                {
                    where: {
                        id: dogOwner.id,
                    },
                    data: {
                        dogs: {
                            connect: {
                                id: dog.id,
                            },
                        },
                    },
                },
            );
        }
    }

    public async seedAssignDogsToDogOwnerProfile(): Promise<void> {
        const dogOwners =
            await this.prisma.dogOwnerProfile.findMany();

        for (const dogOwner of dogOwners) {
            const numDogsToAssign =
                Math.floor(Math.random() * 5) + 1; // Assign 1 to 5 dogs per owner

            const dogs =
                await this.prisma.dog.findMany({
                    take: numDogsToAssign,
                    where: {
                        dogOwnerProfileId: null, // Only assign dogs that don't have an owner yet
                    },
                });

            await this.prisma.dogOwnerProfile.update(
                {
                    where: {
                        id: dogOwner.id,
                    },
                    data: {
                        dogs: {
                            connect: dogs.map(
                                (dog) => ({
                                    id: dog.id,
                                }),
                            ),
                        },
                    },
                },
            );
        }
    }

    public async seedOffers(): Promise<void> {
        const numOffers = 20; // Number of offers to create

        const dogWalkers =
            await this.prisma.user.findMany({
                where: {
                    roles: {
                        has: UserRole.DogWalker,
                    },
                },
            });

        const dogOwners =
            await this.prisma.user.findMany({
                where: {
                    roles: {
                        has: UserRole.DogOwner,
                    },
                },
            });

        const dogs =
            await this.prisma.dog.findMany();

        for (let i = 0; i < numOffers; i++) {
            const randomDogWalkerIndex =
                Math.floor(
                    Math.random() *
                        dogWalkers.length,
                );
            const randomDogOwnerIndex =
                Math.floor(
                    Math.random() *
                        dogOwners.length,
                );
            const randomDogIndex = Math.floor(
                Math.random() * dogs.length,
            );

            const dogWalker =
                dogWalkers[randomDogWalkerIndex];
            const dogOwner =
                dogOwners[randomDogOwnerIndex];
            const dog = dogs[randomDogIndex];

            const randomDate =
                faker.date.future();

            await this.prisma.offer.create({
                data: {
                    Walker: {
                        connect: {
                            id: dogWalker.id,
                        },
                    },
                    Owner: {
                        connect: {
                            id: dogOwner.id,
                        },
                    },
                    Dog: {
                        connect: {
                            id: dog.id,
                        },
                    },
                    date: randomDate,
                    status: OfferStatus.Pending,
                },
            });
        }
    }

    public async seedDogWalkerAvailability(): Promise<void> {
        try {
            const dogWalkerProfiles =
                await this.prisma.dogWalkerProfile.findMany();
            const numProfilesToSeed = Math.floor(
                dogWalkerProfiles.length * 0.8,
            );

            for (
                let i = 0;
                i < numProfilesToSeed;
                i++
            ) {
                const profile =
                    dogWalkerProfiles[i];

                for (const weekday of Object.values(
                    Weekday,
                )) {
                    //check is already seeded
                    const isWeekdayAlreadySeeded =
                        await this.prisma.dogWalkerAvailability.findFirst(
                            {
                                where: {
                                    AND: [
                                        {
                                            dogWalkerProfileId:
                                                profile.id,
                                        },
                                        {
                                            weekday,
                                        },
                                    ],
                                },
                            },
                        );
                    if (isWeekdayAlreadySeeded) {
                        continue;
                    }

                    const startHour = Math.floor(
                        Math.random() * 24,
                    );
                    const endHour =
                        Math.floor(
                            Math.random() *
                                (24 - startHour),
                        ) + startHour;

                    await this.prisma.dogWalkerAvailability.create(
                        {
                            data: {
                                dogWalkerProfileId:
                                    profile.id,
                                weekday,
                                startHour,
                                endHour,
                            },
                        },
                    );
                }
            }
        } catch (error) {
            console.error(
                'Error seeding DogWalkerAvailability:',
                error,
            );
            throw error;
        }
    }
}
