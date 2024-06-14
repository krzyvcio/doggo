import { IsDateString, IsEmail, IsEnum, IsInt, IsOptional, IsPhoneNumber, IsString, isDateString, isString } from 'class-validator';
import { OfferType } from '@prisma/client';

export class CreateOfferDto {

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    @IsString()
    email: string;

    @IsPhoneNumber('PL')
    phone: string;

    @IsOptional()
    @IsString()
    dogName: string;

    @IsDateString()
    @IsOptional()
    date: Date;

    @IsString()
    @IsOptional()
    location: string;

    @IsOptional()
    priceFor15Minutes: number;

    @IsOptional()
    priceFor30Minutes: number;

    @IsOptional()
    priceFor60Minutes: number;

    @IsEnum(OfferType)
    offerType: OfferType;
}