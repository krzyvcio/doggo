import { Injectable } from "@nestjs/common";
import { CreatePetOwnerDto } from "./dto/create-pet-owner.dto";
import { UpdatePetOwnerDto } from "./dto/update-pet-owner.dto";

@Injectable()
export class PetOwnerService {
  create(createPetOwnerDto: CreatePetOwnerDto) {
    return "This action adds a new petOwner";
  }

  findAll() {
    return `This action returns all petOwner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} petOwner`;
  }

  update(id: number, updatePetOwnerDto: UpdatePetOwnerDto) {
    return `This action updates a #${id} petOwner`;
  }

  remove(id: number) {
    return `This action removes a #${id} petOwner`;
  }
}
