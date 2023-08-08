import { SeedService } from './seed.service';
import { BreedService } from '../breed/breed.service';
export declare class SeedController {
    private readonly seedService;
    private breedService;
    constructor(seedService: SeedService, breedService: BreedService);
    seedAll(): Promise<{
        countBreeds: number;
    }>;
    seedBreed(): Promise<number>;
}
