import { Module } from '@nestjs/common';
import { UserPasswordResetService } from './user-password-reset.service';
import { UserPasswordResetController } from './user-password-reset.controller';
import { EmailService } from '../email/email.service';

@Module({
    controllers: [UserPasswordResetController],
    providers: [
        UserPasswordResetService,
        EmailService,
    ],
    exports: [UserPasswordResetService],
})
export class UserPasswordResetModule {}
