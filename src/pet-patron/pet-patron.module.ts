import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { TypeOrmExModule } from '../typeorm-ex.module';
import { PetPatronController } from './pet-patron.controller';
import { PetPatronService } from './pet-patron.service';
import { PetPatronRepository } from './repositories/pet-patron.repository';

@Module({
    imports: [
        SharedModule,
        TypeOrmExModule.forCustomRepository([PetPatronRepository]),
    ],
    controllers: [PetPatronController],
    providers: [PetPatronService],
    exports: [PetPatronService],
})
export class PetPatronModule {}
