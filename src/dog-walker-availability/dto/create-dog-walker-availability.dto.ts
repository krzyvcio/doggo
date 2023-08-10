import { Weekday } from '@prisma/client';
import {
    IsEnum,
    IsNumber,
} from 'class-validator';

export class CreateDogWalkerAvailabilityDto {
    @IsNumber()
    dogWalkerProfileId: number;

    @IsEnum(Weekday)
    weekday: Weekday;

    @IsNumber()
    startHour: number;

    @IsNumber()
    endHour: number;
}
