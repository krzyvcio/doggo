import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDogDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'User id',
    })
    userId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Name of dog',
    })
    name: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({
        description: 'Breed id',
    })
    breedId?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({
        description: 'Age of dog',
    })
    age?: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: 'Image url of dog',
    })
    image?: string;
}
