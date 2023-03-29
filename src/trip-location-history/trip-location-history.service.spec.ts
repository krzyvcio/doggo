import { Test, TestingModule } from "@nestjs/testing";

import { TripLocationHistoryService } from "./trip-location-history.service";

describe("TripLocationHistoryService", () => {
  let service: TripLocationHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripLocationHistoryService]
    }).compile();

    service = module.get<TripLocationHistoryService>(TripLocationHistoryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
