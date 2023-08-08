import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import { UserEmailConfirmationService } from './user-email-confirmation.service';

@Controller('email-confirmation')
export class UserEmailConfirmationController {
    constructor(
        private readonly userEmailConfirmationService: UserEmailConfirmationService,
    ) {}

    @Get(':token')
    async verify(@Param('token') token: string) {
        if (!token) {
            return {
                message: 'Token is required',
            };
        }

        const isVeryfied =
            await this.userEmailConfirmationService.verifyUser(
                token,
            );

        if (isVeryfied) {
            return {
                message: 'User verified',
            };
        } else {
            return {
                message:
                    'User cannot be verified',
            };
        }
    }
}
