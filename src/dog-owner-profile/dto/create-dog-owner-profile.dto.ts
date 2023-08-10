import {
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDogOwnerProfileDto {
    @IsNumber()
    @ApiProperty({
        description: 'User id',
    })
    userId: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: 'Bio',
    })
    bio?: string;
}
