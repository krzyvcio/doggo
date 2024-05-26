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
            countBreeds: `${countBreeds} breeds`,
        };
    }

    @Get('/breed')
    async seedBreed() {
        await this.breedService.seed();
    }

    @Get('/admin')
    async seedAdmin(): Promise<void> {
        await this.seedService.seedAdmin();
    }

    @Get('/dogOwnerProfiles')
    async seedDogOwnerProfiles(): Promise<void> {
        await this.seedService.seedDogOwnerProfile();
    }

    @Get('/dogWalkerProfiles')
    async seedDogWalkerProfiles(): Promise<void> {
        await this.seedService.seedDogWalkerProfile();
    }
}
