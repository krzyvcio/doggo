import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
    MaxLength,
} from 'class-validator';

import { CreateUserInput } from './user-create-input.dto';

export class UpdateUserInput extends PartialType(CreateUserInput) {}
