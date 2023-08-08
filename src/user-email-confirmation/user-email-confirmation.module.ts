import { Module } from '@nestjs/common';
import { UserEmailConfirmationService } from './user-email-confirmation.service';
import { UserEmailConfirmationController } from './user-email-confirmation.controller';

@Module({
    controllers: [
        UserEmailConfirmationController,
    ],
    providers: [UserEmailConfirmationService],
    exports: [UserEmailConfirmationService],
})
export class UserEmailConfirmationModule {}
