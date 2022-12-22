import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PetOwnerService } from "./pet-owner.service";
import { CreatePetOwnerDto } from "./dto/create-pet-owner.dto";
import { UpdatePetOwnerDto } from "./dto/update-pet-owner.dto";

@Controller("pet-owner")
export class PetOwnerController {
  constructor(private readonly petOwnerService: PetOwnerService) {
  }

  @Post()
  create(@Body() createPetOwnerDto: CreatePetOwnerDto) {
    return this.petOwnerService.create(createPetOwnerDto);
  }

  @Get()
  findAll() {
    return this.petOwnerService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.petOwnerService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePetOwnerDto: UpdatePetOwnerDto) {
    return this.petOwnerService.update(+id, updatePetOwnerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.petOwnerService.remove(+id);
  }
}
