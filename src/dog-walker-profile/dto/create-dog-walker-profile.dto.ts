import {
    IsOptional,
    IsString,
} from 'class-validator';

export class CreateDogWalkerProfileDto {
    userId: number;

    @IsString()
    @IsOptional()
    bio?: string;
}
