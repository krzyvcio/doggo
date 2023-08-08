import {
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class CreateBreedDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    englishName?: string;
}
