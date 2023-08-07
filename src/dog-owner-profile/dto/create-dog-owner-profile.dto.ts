import {
    IsOptional,
    IsString,
} from 'class-validator';

export class CreateDogOwnerProfileDto {
    userId: number;

    @IsString()
    @IsOptional()
    bio?: string;
}
