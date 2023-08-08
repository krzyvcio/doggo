import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async editUser(
        userId: number,
        dto: EditUserDto,
    ) {
        const user =
            await this.prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    ...dto,
                },
            });

        delete user.password;

        return user;
    }

    async getAllUsers() {
        const users =
            await this.prisma.user.findMany({
                select: {
                    id: true,
                    email: true,
                },
            });

        return users;
    }

    async getUserById(userId: number) {
        const user =
            await this.prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

        return user;
    }

    async getUserByEmail(email: string) {
        const user =
            await this.prisma.user.findUnique({
                where: {
                    email,
                },
            });

        return user;
    }

    async deleteUser(userId: number) {
        //find user by id
        const user =
            await this.prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

        if (user) {
            //find DogWalkerProfile by userId
            const dogWalkerProfile =
                await this.prisma.dogWalkerProfile.findUnique(
                    {
                        where: {
                            userId: userId,
                        },
                    },
                );

            if (dogWalkerProfile) {
                //delete DogWalkerProfile
                await this.prisma.dogWalkerProfile.delete(
                    {
                        where: {
                            id: dogWalkerProfile.id,
                        },
                    },
                );
            }

            //find DogOwnerProfile by userId
            const dogOwnerProfile =
                await this.prisma.dogOwnerProfile.findUnique(
                    {
                        where: {
                            userId: userId,
                        },
                    },
                );

            //TODO: if have dogs remove dogds

            if (dogOwnerProfile) {
                //delete DogOwnerProfile
                await this.prisma.dogOwnerProfile.delete(
                    {
                        where: {
                            id: dogOwnerProfile.id,
                        },
                    },
                );
            }
        }

        // const user =
        //     await this.prisma.user.delete({
        //         where: {
        //             id: userId,
        //         },
        //     });

        return user;
    }

    //careful with this one, im adding it for testing purposes
    async deleteAllUsers() {
        const users =
            await this.prisma.user.deleteMany();

        return users;
    }

    // TODO: implement this
    async getUserWithProfile(userId: number) {
        return null;
    }
}
