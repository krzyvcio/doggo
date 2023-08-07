import { PartialType } from '@nestjs/mapped-types';
import { CreateDogOwnerProfileDto } from './create-dog-owner-profile.dto';

export class UpdateDogOwnerProfileDto extends PartialType(
    CreateDogOwnerProfileDto,
) {}
