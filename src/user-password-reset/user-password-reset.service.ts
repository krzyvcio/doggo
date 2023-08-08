import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 } from 'uuid';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { EmailService } from '../email/email.service';

@Injectable()
export class UserPasswordResetService {
    constructor(
        private prisma: PrismaService,
        private emailService: EmailService,
    ) {}

    async create(userId: number) {
        if (!userId) {
            throw new Error(
                'User id is required',
            );
        }

        //add to date 7 days
        const date = new Date();
        date.setDate(date.getDate() + 7);

        const userPasswordReset =
            await this.prisma.userPasswordReset.create(
                {
                    data: {
                        userId,
                        token: v4(),
                        expiresAt: date,
                    },
                },
            );

        return userPasswordReset;
    }

    async createAndSendEmail(email: string) {
        if (!email) {
            throw new Error(
                'User id is required',
            );
        }

        const user =
            await this.prisma.user.findUnique({
                where: {
                    email: email,
                },
                select: {
                    id: true,
                    email: true,
                },
            });
        if (!user) {
            throw new Error('User not found');
        }

        const userPasswordReset =
            await this.create(user.id);

        await this.emailService.sendResetPasswordEmail(
            user.email,
            userPasswordReset.token,
        );
    }

    async findOne(id: number) {
        const userPasswordReset =
            await this.prisma.userPasswordReset.findUnique(
                {
                    where: {
                        id: id,
                    },
                },
            );
    }

    async verify(token: string) {
        const userPasswordReset =
            await this.prisma.userPasswordReset.findUnique(
                {
                    where: {
                        token: token,
                    },
                },
            );

        if (!userPasswordReset) {
            return false;
        }

        if (
            userPasswordReset.expiresAt <
            new Date()
        ) {
            return false;
        }

        return true;
    }

    async resetPassword(email: string) {
        if (!email) {
            throw new Error('Email is required');
        }

        const user =
            await this.prisma.user.findUnique({
                where: {
                    email: email,
                },
            });

        if (!user) {
            throw new Error('User not found');
        }

        const userPasswordReset =
            await this.create(user.id);
    }

    async changePassword(
        newPassword: string,
        token: string,
    ) {
        try {
            const userPasswordReset =
                await this.prisma.userPasswordReset.findUnique(
                    {
                        where: {
                            token: token,
                        },
                    },
                );

            if (!userPasswordReset) {
                throw new Error(
                    'Token is invalid',
                );
            }

            if (
                userPasswordReset.expiresAt <
                new Date()
            ) {
                throw new Error(
                    'Token is expired',
                );
            }

            const user =
                await this.prisma.user.findUnique(
                    {
                        where: {
                            id: userPasswordReset.userId,
                        },
                    },
                );

            if (!user) {
                throw new Error('User not found');
            }

            const newPasswordHash =
                await argon.hash(newPassword);

            const updatedUser =
                await this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        password: newPasswordHash,
                    },
                });

            await this.prisma.userPasswordReset.delete(
                {
                    where: {
                        id: userPasswordReset.id,
                    },
                },
            );

            return updatedUser;
        } catch (e) {
            if (
                e instanceof
                PrismaClientKnownRequestError
            ) {
                throw new Error(
                    'Token is invalid',
                );
            }
        }
    }
}
