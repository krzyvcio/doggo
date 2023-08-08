import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    private transporter: {
        sendMail: (arg0: {
            from: string; // sender address
            to: string; // list of receivers
            subject: string; // Subject line
            text: string; // plain text body
            html: string;
        }) => any;
    };

    constructor(
        config: ConfigService,
        // private logger: LoggerService,
    ) {
        this.transporter =
            nodemailer.createTransport({
                host: config.get('MAILER_HOST'),
                port: config.get('MAILER_PORT'),
                secure: true, // true for 465, false for other ports
                auth: {
                    user: config.get(
                        'MAILER_USER',
                    ),

                    pass: config.get(
                        'MAILER_PASSWORD',
                    ),
                },
            });
    }

    async sendMail(
        recipient: string,
        subject: string,
        text: string,
        html?: string,
    ) {
        const emailParams = {
            from: '"DogGo" <doggo@rusin.dev>', // sender address
            to: recipient, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html,
        };

        if (!html) delete emailParams.html;

        const info =
            await this.transporter.sendMail(
                emailParams,
            );

        return {
            message: 'Email sent',
            info,
        };
    }

    async sendConfirmationEmail(
        token: string,
        recipient: string,
    ) {
        const tokenUrl = `http://localhost:3333/email-confirmation/${token}`;

        const subject =
            'DogGo - Potwierdź swój adres email';
        const text = `Kliknij w w link: ${token}`;
        const html = `<p>Kliknij link aby potwierdzić email:</p><br/>
        <a href="${tokenUrl}" title="Potwierdź swój adres email">Potwierdź swój adres email</a>`;

        return this.sendMail(
            recipient,
            subject,
            text,
            html,
        );
    }

    async sendResetPasswordEmail(
        email: string,
        token: string,
    ) {
        const tokenUrl = `http://localhost:3333/reset-password/${token}`;
        const subject = 'DogGo - Zresetuj hasło';
        const text = `Please click on the link below to confirm your email address: ${token}`;
        const html = `<p>Kliknij, aby zresetować hasło:</p><br/>
        <a href="${tokenUrl}" title="Potwierdź swój adres email">Potwierdź swój adres email</a>`;

        await this.sendMail(
            email,
            subject,
            text,
            html,
        );

        return {
            status: 'message sent',
        };
    }
}
