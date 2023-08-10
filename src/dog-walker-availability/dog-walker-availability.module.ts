import { Module } from '@nestjs/common';
import { DogWalkerAvailabilityService } from './dog-walker-availability.service';
import { DogWalkerAvailabilityController } from './dog-walker-availability.controller';

@Module({
    controllers: [
        DogWalkerAvailabilityController,
    ],
    providers: [DogWalkerAvailabilityService],
    exports: [DogWalkerAvailabilityService],
})
export class DogWalkerAvailabilityModule {}
