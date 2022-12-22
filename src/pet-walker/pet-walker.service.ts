import { Injectable } from "@nestjs/common";
import { CreatePetWalkerDto } from "./dto/create-pet-walker.dto";
import { UpdatePetWalkerDto } from "./dto/update-pet-walker.dto";

@Injectable()
export class PetWalkerService {
  create(createPetWalkerDto: CreatePetWalkerDto) {
    return "This action adds a new petWalker";
  }

  findAll() {
    return `This action returns all petWalker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} petWalker`;
  }

  update(id: number, updatePetWalkerDto: UpdatePetWalkerDto) {
    return `This action updates a #${id} petWalker`;
  }

  remove(id: number) {
    return `This action removes a #${id} petWalker`;
  }
}
