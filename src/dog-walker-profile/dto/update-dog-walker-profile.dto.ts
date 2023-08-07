import { PartialType } from '@nestjs/mapped-types';
import { CreateDogWalkerProfileDto } from './create-dog-walker-profile.dto';

export class UpdateDogWalkerProfileDto extends PartialType(
    CreateDogWalkerProfileDto,
) {}
