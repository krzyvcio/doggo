import { Module } from "@nestjs/common";

import { TripLocationHistoryController } from "./trip-location-history.controller";
import { TripLocationHistoryService } from "./trip-location-history.service";

@Module({
  controllers: [TripLocationHistoryController],
  providers: [TripLocationHistoryService]
})
export class TripLocationHistoryModule {
}
