import {
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBreedDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Name',
    })
    name: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: 'English name',
    })
    englishName?: string;
}
