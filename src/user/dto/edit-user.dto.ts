import {
    IsOptional,
    IsPhoneNumber,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EditUserDto {
    // TODO: uncomment this when you have email verification for new email
    // @IsEmail()
    // @IsOptional()
    // email?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: 'First name',
    })
    firstName?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: 'Last name',
    })
    lastName?: string;

    @IsPhoneNumber()
    @IsOptional()
    @ApiProperty({
        description: 'Phone number',
    })
    phone?: string;
}
