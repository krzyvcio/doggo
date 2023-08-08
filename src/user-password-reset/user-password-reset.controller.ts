import {
    Body,
    Controller,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { UserPasswordResetService } from './user-password-reset.service';

@Controller('password-reset')
export class UserPasswordResetController {
    constructor(
        private readonly userPasswordResetService: UserPasswordResetService,
    ) {}

    @Get('resetPassword')
    async resetPassword(
        @Body('email') email: string,
    ) {
        if (!email) {
            return {
                message: 'Email is required',
            };
        }

        const userPasswordReset =
            await this.userPasswordResetService.resetPassword(
                email,
            );

        return userPasswordReset;
    }

    //TODO: add auth guard
    @Get('reset/:userId')
    async create(
        @Param('userId') userId: number,
    ) {
        if (!userId) {
            return {
                message: 'User id is required',
            };
        }

        const userPasswordReset =
            await this.userPasswordResetService.create(
                userId,
            );

        return userPasswordReset;
    }

    @Post(':token')
    async verify(
        @Body('password') password: string,
        @Param('token') token: string,
    ) {
        if (!token) {
            return {
                message: 'Token is required',
            };
        }

        const isVeryfied =
            await this.userPasswordResetService.changePassword(
                token,
                password,
            );

        if (isVeryfied) {
            return {
                message: 'Password changed',
            };
        } else {
            return {
                message:
                    'Password cannot be changed',
            };
        }
    }
}
