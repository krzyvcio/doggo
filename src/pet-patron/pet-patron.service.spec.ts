import { Test, TestingModule } from '@nestjs/testing';

import { PetPatronService } from './pet-patron.service';

describe('PetPatronService', () => {
    let service: PetPatronService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PetPatronService],
        }).compile();

        service = module.get<PetPatronService>(PetPatronService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
