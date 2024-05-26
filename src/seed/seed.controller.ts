import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

import { BreedService } from '../breed/breed.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('seed')
@Controller('seed')
export class SeedController {
    constructor(
        private readonly seedService: SeedService,
        private breedService: BreedService,
    ) {}

    @Get('/all')
    async seedAll() {
        const countBreeds =
            await this.breedService.seed();

        return {
            countBreeds,
        };
    }

    @Get('/breed')
    async seedBreed() {
        return await this.breedService.seed();
    }

    async seedAdmin(): Promise<void> {
        return await this.seedService.seedAdmin();
    }

    async seedDogOwner(): Promise<void> {
        return await this.seedService.seedDogOwnerProfile();
    }

    async seedDogWalkerProfile(): Promise<void> {
        return await this.seedService.seedDogWalkerProfile();
    }
}
