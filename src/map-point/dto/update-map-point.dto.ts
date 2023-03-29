import { PartialType } from "@nestjs/swagger";

import { CreateMapPointDto } from "./create-map-point.dto";

export class UpdateMapPointDto extends PartialType(CreateMapPointDto) {
}
