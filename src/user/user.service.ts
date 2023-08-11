import {
    Injectable,
    Param,
} from '@nestjs/common';
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

    async getAllUsers(
        limit?: number,
        offset?: number,
        firstName?: string,
        lastName?: string,
        hasDowalkerProfile?: boolean,
        hasDogOwnerProfile?: boolean,
    ) {
        return this.prisma.user.findMany({
            take: limit,
            skip: offset,
            where: {
                firstName: {
                    contains: firstName,
                },
                lastName: {
                    contains: lastName,
                },
                dogWalkerProfile: {
                    isNot: hasDowalkerProfile
                        ? null
                        : undefined,
                },
                dogOwnerProfile: {
                    isNot: hasDogOwnerProfile
                        ? null
                        : undefined,
                },
            },
        });
    }

    async getUserById(userId: number) {
        return this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
    }

    async getUserByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    async getUserByPhone(phone: string) {
        return this.prisma.user.findMany({
            where: {
                phone,
            },
        });
    }

    async findAll(
        limit?: number,
        offset?: number,
        firstName?: string,
        lastName?: string,
    ) {
        return this.prisma.user.findMany({
            take: limit,
            skip: offset,
            where: {
                firstName: {
                    contains: firstName,
                },
                lastName: {
                    contains: lastName,
                },
            },
        });
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

        //mark user as deleted
        await this.prisma.user.update({
            where: {
                id: userId,
            },
            select: {
                id: true,
                isUserDeleted: true,
            },
            data: {
                isUserDeleted: true,
            },
        });

        return user;
    }

    //careful with this one, im adding it for testing purposes
    async deleteAllUsers() {
        return await this.prisma.user.deleteMany();
    }

    // TODO: implement this
    async getUserWithProfile(
        userId: number,
        dogOwnerProfile: boolean,
        dogWalkerProfile: boolean,
    ) {
        const user =
            await this.prisma.user.findUnique({
                where: {
                    id: userId,
                },
                include: {
                    dogOwnerProfile:
                        dogOwnerProfile,
                    dogWalkerProfile:
                        dogWalkerProfile,
                },
            });

        return user;
    }
}
