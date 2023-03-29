import { Injectable } from "@nestjs/common";
import { CreateEmailChangeDto } from "./dto/create-email-change.dto";
import { UpdateEmailChangeDto } from "./dto/update-email-change.dto";

@Injectable()
export class EmailChangeService {
  create(createEmailChangeDto: CreateEmailChangeDto) {
    return "This action adds a new emailChange";
  }

  findAll() {
    return `This action returns all emailChange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailChange`;
  }

  update(id: number, updateEmailChangeDto: UpdateEmailChangeDto) {
    return `This action updates a #${id} emailChange`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailChange`;
  }
}
