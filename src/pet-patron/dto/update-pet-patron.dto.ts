import { PartialType } from "@nestjs/swagger";

import { CreatePetPatronDto } from "./create-pet-patron.dto";

export class UpdatePetPatronDto extends PartialType(CreatePetPatronDto) {
}
