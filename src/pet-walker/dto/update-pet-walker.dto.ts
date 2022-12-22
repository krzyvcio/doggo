import { PartialType } from "@nestjs/swagger";
import { CreatePetWalkerDto } from "./create-pet-walker.dto";

export class UpdatePetWalkerDto extends PartialType(CreatePetWalkerDto) {
}
