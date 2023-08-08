import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { BreedService } from '../breed/breed.service';

@Module({
    controllers: [SeedController],
    providers: [SeedService, BreedService],
    exports: [SeedService],
})
export class SeedModule {}
