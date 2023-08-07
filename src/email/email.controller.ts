import {
    Controller,
    Post,
    Body,
} from '@nestjs/common';
import { EmailService } from './email.service';

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
