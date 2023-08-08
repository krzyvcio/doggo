import {
    IsOptional,
    IsPhoneNumber,
    IsString,
} from 'class-validator';

export class EditUserDto {
    // TODO: uncomment this when you have email verification for new email
    // @IsEmail()
    // @IsOptional()
    // email?: string;

    @IsString()
    @IsOptional()
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsPhoneNumber()
    @IsOptional()
    phone?: string;
}
