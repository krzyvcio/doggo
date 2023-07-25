import { Injectable } from '@nestjs/common';

import { CreateEmailVerificationDto } from './dto/create-email-verification.dto';
import { UpdateEmailVerificationDto } from './dto/update-email-verification.dto';

@Injectable()
export class EmailVerificationService {
    create(createEmailVerificationDto: CreateEmailVerificationDto) {
        return 'This action adds a new emailVerification';
    }

    findAll() {
        return `This action returns all emailVerification`;
    }

    findOne(id: number) {
        return `This action returns a #${id} emailVerification`;
    }

    update(id: number, updateEmailVerificationDto: UpdateEmailVerificationDto) {
        return `This action updates a #${id} emailVerification`;
    }

    remove(id: number) {
        return `This action removes a #${id} emailVerification`;
    }
}
