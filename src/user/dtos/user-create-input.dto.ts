import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    ArrayNotEmpty,
    IsAlphanumeric,
    IsArray,
    IsBoolean,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
    MaxLength,
} from 'class-validator';

import { ROLE } from '../../auth/constants/role.constant';
import { IsAtLeastOnePropertySet } from '../../auth/decorators/validation.decorator';

export class CreateUserInput {
    @ApiPropertyOptional()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    firstName: string;

    @IsOptional()
    lastName: string;

    @IsOptional()
    middleName: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(6, 100)
    @IsAlphanumeric()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(6, 100)
    password: string;

    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    @IsEnum(ROLE, { each: true })
    roles: ROLE[];

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(100)
    email: string;

    @ApiProperty()
    @IsBoolean()
    isAccountDisabled: boolean;

    @IsOptional()
    @IsBoolean()
    emailVerified: boolean;

    @IsAtLeastOnePropertySet(['iAmPetOwner', 'iAmPetPatron'])
    @IsBoolean()
    iAmPetOwner: boolean;

    @IsAtLeastOnePropertySet(['iAmPetOwner', 'iAmPetPatron'])
    @IsBoolean()
    iAmPetPatron: boolean;
}
