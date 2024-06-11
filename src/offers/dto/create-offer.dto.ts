import {
    IsDateString,
    IsEnum,
    IsInt,
    IsOptional,
} from 'class-validator';
import { OfferStatus } from '@prisma/client';

export class CreateOfferDto {
    @IsInt()
    @IsOptional()
    walkerId?: number;

    @IsInt()
    @IsOptional()
    ownerId?: number;

    @IsInt()
    @IsOptional()
    dogId?: number;

    @IsDateString()
    @IsOptional()
    date?: Date;

    @IsEnum(OfferStatus)
    @IsOptional()
    status?: OfferStatus;
}
