import { Module } from '@nestjs/common';

import { PetOwnerService } from '../pet-owner/pet-owner.service';
import { PetOwnerRepository } from '../pet-owner/repositories/pet-owner.repository';
import { PetPatronService } from '../pet-patron/pet-patron.service';
import { PetPatronRepository } from '../pet-patron/repositories/pet-patron.repository';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmExModule } from '../typeorm-ex.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { ProfileRepository } from './repositories/profile.repository';

@Module({
    imports: [
        SharedModule,
        TypeOrmExModule.forCustomRepository([PetPatronRepository]),
        TypeOrmExModule.forCustomRepository([PetOwnerRepository]),
        TypeOrmExModule.forCustomRepository([ProfileRepository]),
    ],
    controllers: [ProfileController],
    providers: [ProfileService, PetPatronService, PetOwnerService],
    exports: [ProfileService],
})
export class ProfileModule {}
