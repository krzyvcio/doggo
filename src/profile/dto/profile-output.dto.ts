import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { ROLE } from '../../auth/constants/role.constant';
import { PetOwnerOutput } from '../../pet-owner/dto/pet-owner-output.dto';
import { PetPatronOutput } from '../../pet-patron/dto/pet-patron-output.dto';
import { UserOutput } from '../../user/dtos/user-output.dto';

export class ProfileOutput {
    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    bio: string;

    @Expose()
    @ApiProperty()
    userId: number;

    @Expose()
    @ApiProperty()
    petOwnerId: number | null;

    @Expose()
    @ApiProperty({ example: PetOwnerOutput })
    petOwner: PetOwnerOutput | null;

    @Expose()
    @ApiProperty()
    petPatronId: number | null;

    @Expose()
    @ApiProperty({ example: PetPatronOutput })
    petPatron: PetPatronOutput | null;

    @Expose()
    @ApiProperty()
    createdAt: Date;

    @Expose()
    @ApiProperty()
    updatedAt: Date;
}
