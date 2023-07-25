import { Injectable } from '@nestjs/common';

import { CreatePhoneVerificationDto } from './dto/create-phone-verification.dto';
import { UpdatePhoneVerificationDto } from './dto/update-phone-verification.dto';

@Injectable()
export class PhoneVerificationService {
    create(createPhoneVerificationDto: CreatePhoneVerificationDto) {
        return 'This action adds a new phoneVerification';
    }

    findAll() {
        return `This action returns all phoneVerification`;
    }

    findOne(id: number) {
        return `This action returns a #${id} phoneVerification`;
    }

    update(id: number, updatePhoneVerificationDto: UpdatePhoneVerificationDto) {
        return `This action updates a #${id} phoneVerification`;
    }

    remove(id: number) {
        return `This action removes a #${id} phoneVerification`;
    }
}
