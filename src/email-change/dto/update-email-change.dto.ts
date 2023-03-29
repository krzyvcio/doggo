import { PartialType } from "@nestjs/swagger";
import { CreateEmailChangeDto } from "./create-email-change.dto";

export class UpdateEmailChangeDto extends PartialType(CreateEmailChangeDto) {
}
