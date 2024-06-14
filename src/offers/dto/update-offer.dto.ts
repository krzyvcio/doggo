import { PartialType } from '@nestjs/swagger';
import { CreateOfferDto } from './create-offer.dto';
import { OfferType } from '@prisma/client';
import { IsEmail, IsEnum, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {

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

    @IsString()
    @IsOptional()
    date: Date;

    @IsString()
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
