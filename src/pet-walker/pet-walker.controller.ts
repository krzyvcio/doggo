import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PetWalkerService } from "./pet-walker.service";
import { CreatePetWalkerDto } from "./dto/create-pet-walker.dto";
import { UpdatePetWalkerDto } from "./dto/update-pet-walker.dto";

@Controller("pet-walker")
export class PetWalkerController {
  constructor(private readonly petWalkerService: PetWalkerService) {
  }

  @Post()
  create(@Body() createPetWalkerDto: CreatePetWalkerDto) {
    return this.petWalkerService.create(createPetWalkerDto);
  }

  @Get()
  findAll() {
    return this.petWalkerService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.petWalkerService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePetWalkerDto: UpdatePetWalkerDto) {
    return this.petWalkerService.update(+id, updatePetWalkerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.petWalkerService.remove(+id);
  }
}
