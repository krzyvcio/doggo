import { Module } from "@nestjs/common";

import { PetPatronController } from "./pet-patron.controller";
import { PetPatronService } from "./pet-patron.service";

@Module({
  controllers: [PetPatronController],
  providers: [PetPatronService]
})
export class PetPatronModule {
}
