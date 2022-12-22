import { Module } from "@nestjs/common";
import { PetOwnerService } from "./pet-owner.service";
import { PetOwnerController } from "./pet-owner.controller";

@Module({
  controllers: [PetOwnerController],
  providers: [PetOwnerService]
})
export class PetOwnerModule {
}
