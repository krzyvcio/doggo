import { Module } from '@nestjs/common';

import { JwtAuthStrategy } from '../auth/strategies/jwt-auth.strategy';
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
    ],
    providers: [UserService, JwtAuthStrategy, UserAclService],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule {}
