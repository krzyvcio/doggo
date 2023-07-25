import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePetOwnerDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    profileId: number;
}
