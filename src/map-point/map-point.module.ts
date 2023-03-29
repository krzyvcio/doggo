import { Module } from "@nestjs/common";

import { MapPointController } from "./map-point.controller";
import { MapPointService } from "./map-point.service";

@Module({
  controllers: [MapPointController],
  providers: [MapPointService]
})
export class MapPointModule {
}
