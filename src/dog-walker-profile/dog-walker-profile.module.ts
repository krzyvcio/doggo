import { Module } from '@nestjs/common';
import { DogWalkerProfileService } from './dog-walker-profile.service';
import { DogWalkerProfileController } from './dog-walker-profile.controller';

@Module({
    controllers: [DogWalkerProfileController],
    providers: [DogWalkerProfileService],
})
export class DogWalkerProfileModule {}
