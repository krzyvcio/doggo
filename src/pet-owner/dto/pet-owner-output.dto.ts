import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { Profile } from '../../profile/entities/profile.entity';
import { User } from '../../user/entities/user.entity';

export class PetOwnerOutput {
    @Expose()
    @ApiProperty({ example: 1 })
    id: number;

    @Expose()
    @ApiProperty({ example: 1 })
    userId: number;

    @Expose()
    @ApiProperty({ example: User })
    user: User;

    @Expose()
    @ApiProperty({ example: 1 })
    profileId: number;

    @Expose()
    @ApiProperty({ example: Profile })
    profile: Profile;

    @Expose()
    @ApiProperty({ example: 4.3 })
    rating: number;
}
