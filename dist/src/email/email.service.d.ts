import { ConfigService } from '@nestjs/config';
export declare class EmailService {
    private transporter;
    constructor(config: ConfigService);
    sendMail(recipient: string, subject: string, text: string, html?: string): Promise<{
        message: string;
        info: any;
    }>;
    sendConfirmationEmail(token: string, recipient: string): Promise<{
        message: string;
        info: any;
    }>;
    sendResetPasswordEmail(email: string, token: string): Promise<{
        status: string;
    }>;
}
