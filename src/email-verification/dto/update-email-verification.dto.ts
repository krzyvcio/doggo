import { PartialType } from "@nestjs/swagger";

import { CreateEmailVerificationDto } from "./create-email-verification.dto";

export class UpdateEmailVerificationDto extends PartialType(
  CreateEmailVerificationDto
) {
}
