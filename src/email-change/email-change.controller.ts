import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { EmailChangeService } from "./email-change.service";
import { CreateEmailChangeDto } from "./dto/create-email-change.dto";
import { UpdateEmailChangeDto } from "./dto/update-email-change.dto";

@Controller("email-change")
export class EmailChangeController {
  constructor(private readonly emailChangeService: EmailChangeService) {
  }

  @Post()
  create(@Body() createEmailChangeDto: CreateEmailChangeDto) {
    return this.emailChangeService.create(createEmailChangeDto);
  }

  @Get()
  findAll() {
    return this.emailChangeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.emailChangeService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEmailChangeDto: UpdateEmailChangeDto) {
    return this.emailChangeService.update(+id, updateEmailChangeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.emailChangeService.remove(+id);
  }
}
