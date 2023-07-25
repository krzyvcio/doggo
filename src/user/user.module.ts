import { Module } from '@nestjs/common';

import { JwtAuthStrategy } from '../auth/strategies/jwt-auth.strategy';
import { PetOwnerService } from '../pet-owner/pet-owner.service';
import { PetOwnerRepository } from '../pet-owner/repositories/pet-owner.repository';
import { PetPatronService } from '../pet-patron/pet-patron.service';
import { PetPatronRepository } from '../pet-patron/repositories/pet-patron.repository';
import { ProfileService } from '../profile/profile.service';
import { ProfileRepository } from '../profile/repositories/profile.repository';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmExModule } from '../typeorm-ex.module';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { UserAclService } from './services/user-acl.service';

@Module({
    imports: [
        SharedModule,
        TypeOrmExModule.forCustomRepository([UserRepository]),
        TypeOrmExModule.forCustomRepository([ProfileRepository]),
        TypeOrmExModule.forCustomRepository([PetOwnerRepository]),
        TypeOrmExModule.forCustomRepository([PetPatronRepository]),
    ],
    providers: [
        UserService,
        JwtAuthStrategy,
        UserAclService,
        ProfileService,
        PetPatronService,
        PetOwnerService,
    ],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule {}
