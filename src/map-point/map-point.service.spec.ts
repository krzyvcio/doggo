import { Test, TestingModule } from "@nestjs/testing";

import { MapPointService } from "./map-point.service";

describe("MapPointService", () => {
  let service: MapPointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapPointService]
    }).compile();

    service = module.get<MapPointService>(MapPointService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
