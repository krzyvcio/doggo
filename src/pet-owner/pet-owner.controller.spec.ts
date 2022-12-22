import { Test, TestingModule } from "@nestjs/testing";
import { PetOwnerController } from "./pet-owner.controller";
import { PetOwnerService } from "./pet-owner.service";

describe("PetOwnerController", () => {
  let controller: PetOwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetOwnerController],
      providers: [PetOwnerService]
    }).compile();

    controller = module.get<PetOwnerController>(PetOwnerController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
