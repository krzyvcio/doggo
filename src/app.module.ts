import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { DogOwnerProfileModule } from './dog-owner-profile/dog-owner-profile.module';
import { DogWalkerProfileModule } from './dog-walker-profile/dog-walker-profile.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AuthModule,
        UserModule,
        // BookmarkModule,
        PrismaModule,
        DogOwnerProfileModule,
        DogWalkerProfileModule,
    ],
})
export class AppModule {}
