import { Module } from "@nestjs/common";
import { PetWalkerService } from "./pet-walker.service";
import { PetWalkerController } from "./pet-walker.controller";

@Module({
  controllers: [PetWalkerController],
  providers: [PetWalkerService]
})
export class PetWalkerModule {
}
