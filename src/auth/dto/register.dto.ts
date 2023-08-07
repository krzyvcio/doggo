import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsOptional()
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsBoolean()
    petOwner: boolean;

    @IsBoolean()
    petWalker: boolean;
}
