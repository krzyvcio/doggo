import { Module } from '@nestjs/common';
import { DogOwnerProfileService } from './dog-owner-profile.service';
import { DogOwnerProfileController } from './dog-owner-profile.controller';

@Module({
    controllers: [DogOwnerProfileController],
    providers: [DogOwnerProfileService],
    exports: [DogOwnerProfileService],
})
export class DogOwnerProfileModule {}
