import { Test, TestingModule } from "@nestjs/testing";
import { PetWalkerController } from "./pet-walker.controller";
import { PetWalkerService } from "./pet-walker.service";

describe("PetWalkerController", () => {
  let controller: PetWalkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetWalkerController],
      providers: [PetWalkerService]
    }).compile();

    controller = module.get<PetWalkerController>(PetWalkerController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
