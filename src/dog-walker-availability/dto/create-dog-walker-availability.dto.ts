import { Weekday } from '@prisma/client';
import {
    IsEnum,
    IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDogWalkerAvailabilityDto {
    @IsNumber()
    @ApiProperty({
        description: 'Dog walker profile id',
    })
    dogWalkerProfileId: number;

    @IsEnum(Weekday)
    @ApiProperty({
        description: 'Weekday',
        enum: Weekday,
    })
    weekday: Weekday;

    @IsNumber()
    @ApiProperty({
        description: 'Start hour',
    })
    startHour: number;

    @IsNumber()
    @ApiProperty({
        description: 'End hour',
    })
    endHour: number;
}
