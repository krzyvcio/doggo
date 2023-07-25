import { ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsAlphanumeric,
    IsBoolean,
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';

import { IsAtLeastOnePropertySet } from '../../auth/decorators/validation.decorator';

export class CreateProfileDto {
    @ApiPropertyOptional({ example: 'I am a pet owner' })
    @IsString()
    bio: string;

    @ApiPropertyOptional({ example: 1 })
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiPropertyOptional({ example: 1 })
    @IsNotEmpty()
    @IsNumber()
    profileId: number;

    @ApiPropertyOptional({ example: true })
    @IsAtLeastOnePropertySet(['iAmPetOwner', 'iAmPetPatron'])
    @IsBoolean()
    iAmPetOwner: boolean;

    @ApiPropertyOptional({ example: true })
    @IsAtLeastOnePropertySet(['iAmPetOwner', 'iAmPetPatron'])
    @IsBoolean()
    iAmPetPatron: boolean;
}
