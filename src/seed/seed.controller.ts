import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

import { BreedService } from '../breed/breed.service';

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
}
