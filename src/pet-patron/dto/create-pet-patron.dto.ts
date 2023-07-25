import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePetPatronDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    profileId: number;
}
