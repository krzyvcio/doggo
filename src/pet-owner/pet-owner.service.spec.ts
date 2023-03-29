import { Test, TestingModule } from "@nestjs/testing";
import { PetOwnerService } from "./pet-owner.service";

describe("PetOwnerService", () => {
  let service: PetOwnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetOwnerService]
    }).compile();

    service = module.get<PetOwnerService>(PetOwnerService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
