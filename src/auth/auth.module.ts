import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';
import { UserEmailConfirmationService } from 'src/user-email-confirmation/user-email-confirmation.service';
import { EmailService } from 'src/email/email.service';

@Module({
    imports: [JwtModule.register({})],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        UserEmailConfirmationService,
        EmailService,
    ],
})
export class AuthModule {}
