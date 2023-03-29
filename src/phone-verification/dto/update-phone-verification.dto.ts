import { PartialType } from "@nestjs/swagger";

import { CreatePhoneVerificationDto } from "./create-phone-verification.dto";

export class UpdatePhoneVerificationDto extends PartialType(
  CreatePhoneVerificationDto
) {
}
