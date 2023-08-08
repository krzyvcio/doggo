import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendMail({ to, subject, text, html }: {
        to: any;
        subject: any;
        text: any;
        html: any;
    }): Promise<{
        message: string;
        info: any;
    }>;
}
