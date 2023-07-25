import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { TypeOrmExModule } from '../typeorm-ex.module';
import { PetOwnerController } from './pet-owner.controller';
import { PetOwnerService } from './pet-owner.service';
import { PetOwnerRepository } from './repositories/pet-owner.repository';

@Module({
    imports: [
        SharedModule,
        TypeOrmExModule.forCustomRepository([PetOwnerRepository]),
    ],
    controllers: [PetOwnerController],
    providers: [PetOwnerService],
    exports: [PetOwnerService],
})
export class PetOwnerModule {}
