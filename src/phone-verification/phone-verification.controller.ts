import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import { CreatePhoneVerificationDto } from "./dto/create-phone-verification.dto";
import { UpdatePhoneVerificationDto } from "./dto/update-phone-verification.dto";
import { PhoneVerificationService } from "./phone-verification.service";

@Controller("phone-verification")
export class PhoneVerificationController {
  constructor(
    private readonly phoneVerificationService: PhoneVerificationService
  ) {
  }

  @Post()
  create(@Body() createPhoneVerificationDto: CreatePhoneVerificationDto) {
    return this.phoneVerificationService.create(createPhoneVerificationDto);
  }

  @Get()
  findAll() {
    return this.phoneVerificationService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.phoneVerificationService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePhoneVerificationDto: UpdatePhoneVerificationDto
  ) {
    return this.phoneVerificationService.update(
      +id,
      updatePhoneVerificationDto
    );
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.phoneVerificationService.remove(+id);
  }
}
