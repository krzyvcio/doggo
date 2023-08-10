import { PartialType } from '@nestjs/mapped-types';
import { CreateDogWalkerAvailabilityDto } from './create-dog-walker-availability.dto';

export class UpdateDogWalkerAvailabilityDto extends PartialType(
    CreateDogWalkerAvailabilityDto,
) {}
