import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
    MaxLength,
} from 'class-validator';

import { ROLE } from '../constants/role.constant';
import { IsAtLeastOnePropertySet } from '../decorators/validation.decorator';

export class RegisterInput {
    @ApiProperty()
    @MaxLength(100)
    @IsString()
    name: string;

    @ApiProperty()
    @MaxLength(200)
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(6, 100)
    @IsString()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(100)
    email: string;

    // These keys can only be set by ADMIN user.

    roles: ROLE[] = [ROLE.USER];

    isAccountDisabled: boolean;

    @IsOptional()
    firstName: string;
    @IsOptional()
    lastName: string;
    @IsOptional()
    middleName: string;

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
