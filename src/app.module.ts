import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { DogOwnerProfileModule } from './dog-owner-profile/dog-owner-profile.module';
import { DogWalkerProfileModule } from './dog-walker-profile/dog-walker-profile.module';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { UserEmailConfirmationModule } from './user-email-confirmation/user-email-confirmation.module';
import { UserPasswordResetModule } from './user-password-reset/user-password-reset.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AuthModule,
        UserModule,
        PrismaModule,
        DogOwnerProfileModule,
        DogWalkerProfileModule,
        EmailModule,
        UserEmailConfirmationModule,
        UserPasswordResetModule,
    ],
    providers: [EmailService],
})
export class AppModule {}
