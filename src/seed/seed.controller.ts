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
        try {
            await this.breedService.seed();

            await this.seedService.seedAdmin();

            await this.seedService.seedDogOwnerProfile();

            await this.seedService.seedDogWalkerProfile();
        } catch (error) {
            console.log(error);
            return error;
        }
        return {
            message: 'all seeded',
        };
    }

    @Get('/breed')
    async seedBreed() {
        const countBreeds =
            await this.breedService.seed();

        return {
            countBreeds: `${countBreeds} breeds`,
        };
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

    @Get('/dogs')
    async seedDogs(): Promise<void> {
        await this.seedService.seedDogs();
    }

    @Get('/assignDogsToDogOwnerProfiles')
    async seedAssignDogsToDogOwnerProfiles(): Promise<void> {
        await this.seedService.seedAssignDogsToDogOwnerProfile();
    }

    @Get('/offers')
    async seedOffers(): Promise<void> {
        await this.seedService.seedOffers();
    }

    @Get('/dogWalkerAvailability')
    async seedDogWalkerAvailability(): Promise<void> {
        await this.seedService.seedDogWalkerAvailability();
    }

    @Get('/cities')
    async seedCities(): Promise<void> {
        await this.seedService.seedCities();
    }
}
