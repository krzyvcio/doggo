import { Module } from '@nestjs/common';

import { PetOwnerController } from './pet-owner.controller';
import { PetOwnerService } from './pet-owner.service';

@Module({
    controllers: [PetOwnerController],
    providers: [PetOwnerService],
})
export class PetOwnerModule {}
