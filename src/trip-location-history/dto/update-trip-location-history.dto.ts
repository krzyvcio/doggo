import { PartialType } from "@nestjs/swagger";

import { CreateTripLocationHistoryDto } from "./create-trip-location-history.dto";

export class UpdateTripLocationHistoryDto extends PartialType(CreateTripLocationHistoryDto) {
}
