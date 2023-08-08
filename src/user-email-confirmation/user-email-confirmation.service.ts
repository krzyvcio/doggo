import {
    Injectable,
    Logger,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { uuid } from 'uuidv4';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class UserEmailConfirmationService {
    constructor(private prisma: PrismaService) {}

    //This function is responsible for creating a user email confirmation record in the database.
    async create(userId: number) {
        if (!userId) {
            throw new Error(
                'User id is required',
            );
        }

        //generate date 7 days from now
        const date = new Date();
        date.setDate(date.getDate() + 7);

        const userConfirmation =
            await this.prisma.userEmailConfirmation.create(
                {
                    data: {
                        userId,
                        token: uuid(),
                        expiresAt: date,
                    },
                },
            );

        return userConfirmation;
    }

    async findOne(id: number) {
        const userConfirmation =
            await this.prisma.userEmailConfirmation.findUnique(
                {
                    where: {
                        id: id,
                    },
                },
            );
    }

    async verify(token: string) {
        const userConfirmation =
            await this.prisma.userEmailConfirmation.findUnique(
                {
                    where: {
                        token: token,
                    },
                },
            );

        if (!userConfirmation) {
            return false;
        }

        if (
            userConfirmation.expiresAt <
            new Date()
        ) {
            return false;
        }

        return true;
    }

    //this method is used to verify the user and update the user's email confirmation status
    //and delete the user email confirmation record
    async verifyUser(token: string) {
        try {
            const userConfirmation =
                await this.prisma.userEmailConfirmation.findUnique(
                    {
                        where: {
                            token: token,
                        },
                    },
                );

            if (!userConfirmation) {
                return false;
            }

            if (
                userConfirmation.expiresAt <
                new Date()
            ) {
                return false;
            }

            const user =
                await this.prisma.user.findUnique(
                    {
                        where: {
                            id: userConfirmation.userId,
                        },
                    },
                );

            if (!user) {
                return false;
            }

            await this.prisma.user.update({
                where: {
                    id: userConfirmation.userId,
                },
                data: {
                    isEmailConfirmed: true,
                },
            });

            await this.prisma.userEmailConfirmation.delete(
                {
                    where: {
                        id: userConfirmation.id,
                    },
                },
            );

            return true;
        } catch (e) {
            if (
                e instanceof
                PrismaClientKnownRequestError
            )
                //if prisma execution fails
                return false;
        }
    }

    async delete(id: number) {
        const userConfirmation =
            await this.prisma.userEmailConfirmation.delete(
                {
                    where: {
                        id: id,
                    },
                },
            );

        return userConfirmation;
    }
}
