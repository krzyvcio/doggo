import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    private transporter;
    constructor(config: ConfigService) {
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
        let info =
            await this.transporter.sendMail({
                from: '"DogGo" <doggo@rusin.dev>', // sender address
                to: recipient, // list of receivers
                subject: subject, // Subject line
                text: text, // plain text body
                html: html,
                // html: "<b>Hello world?</b>", // html body
            });
        //TODO: logging and storing sent emails to mongoDB

        console.log(
            'Message sent: %s',
            info.messageId,
        );

        return {
            status: 'message sent',
            messageId: info.messageId,
        };
    }
}
