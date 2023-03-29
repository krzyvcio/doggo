import { Test, TestingModule } from "@nestjs/testing";

import { TripLocationHistoryController } from "./trip-location-history.controller";
import { TripLocationHistoryService } from "./trip-location-history.service";

describe("TripLocationHistoryController", () => {
  let controller: TripLocationHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripLocationHistoryController],
      providers: [TripLocationHistoryService]
    }).compile();

    controller = module.get<TripLocationHistoryController>(TripLocationHistoryController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
