import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { UserRole } from '@prisma/client';

export class AuthTokenOutput {
    @Expose()
    @ApiProperty()
    access_token: string;

    // @Expose()
    // @ApiProperty()
    // refreshToken: string;
}

export class UserAccessTokenClaims {
    @Expose()
    id: number;
    @Expose()
    username: string;
    @Expose()
    roles: UserRole[];
}

export class UserRefreshTokenClaims {
    id: number;
}
