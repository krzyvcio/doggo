import { Test, TestingModule } from "@nestjs/testing";
import { PetWalkerService } from "./pet-walker.service";

describe("PetWalkerService", () => {
  let service: PetWalkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetWalkerService]
    }).compile();

    service = module.get<PetWalkerService>(PetWalkerService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
