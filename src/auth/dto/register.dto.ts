import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    @Expose()
    @ApiProperty({
        description: 'Email',
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    @ApiProperty({
        description: 'Password',
    })
    password: string;

    @IsString()
    @IsOptional()
    @Expose()
    @ApiProperty({
        description: 'First name',
    })
    firstName?: string;

    @IsString()
    @IsOptional()
    @Expose()
    @ApiProperty({
        description: 'Last name',
    })
    lastName?: string;

    @IsBoolean()
    @Expose()
    @ApiProperty({
        description: 'Is pet owner?',
    })
    petOwner: boolean;

    @IsBoolean()
    @Expose()
    @ApiProperty({
        description: 'Is pet walker?',
    })
    petWalker: boolean;
}
