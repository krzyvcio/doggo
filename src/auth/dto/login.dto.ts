import {
    IsEmail,
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
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
}
