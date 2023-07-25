import { Test, TestingModule } from '@nestjs/testing';

import { MapPointController } from './map-point.controller';
import { MapPointService } from './map-point.service';

describe('MapPointController', () => {
    let controller: MapPointController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MapPointController],
            providers: [MapPointService],
        }).compile();

        controller = module.get<MapPointController>(MapPointController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
