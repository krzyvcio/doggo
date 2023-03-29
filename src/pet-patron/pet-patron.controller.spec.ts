import { Test, TestingModule } from "@nestjs/testing";

import { PetPatronController } from "./pet-patron.controller";
import { PetPatronService } from "./pet-patron.service";

describe("PetPatronController", () => {
  let controller: PetPatronController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetPatronController],
      providers: [PetPatronService]
    }).compile();

    controller = module.get<PetPatronController>(PetPatronController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
