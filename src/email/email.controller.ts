import {
    Body,
    Controller,
    Post,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('email')
@Controller('email')
export class EmailController {
    constructor(
        private readonly emailService: EmailService,
    ) {}

    //for testing purposes
    @Post('/send')
    async sendMail(
        @Body() { to, subject, text, html },
    ) {
        return await this.emailService.sendMail(
            to,
            subject,
            text,
            html,
        );
    }
}
