"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
let EmailService = class EmailService {
    constructor(config) {
        this.transporter =
            nodemailer.createTransport({
                host: config.get('MAILER_HOST'),
                port: config.get('MAILER_PORT'),
                secure: true,
                auth: {
                    user: config.get('MAILER_USER'),
                    pass: config.get('MAILER_PASSWORD'),
                },
            });
    }
    async sendMail(recipient, subject, text, html) {
        const emailParams = {
            from: '"DogGo" <doggo@rusin.dev>',
            to: recipient,
            subject: subject,
            text: text,
            html: html,
        };
        if (!html)
            delete emailParams.html;
        const info = await this.transporter.sendMail(emailParams);
        return {
            message: 'Email sent',
            info,
        };
    }
    async sendConfirmationEmail(token, recipient) {
        const tokenUrl = `http://localhost:3333/email-confirmation/${token}`;
        const subject = 'DogGo - Potwierdź swój adres email';
        const text = `Kliknij w w link: ${token}`;
        const html = `<p>Kliknij link aby potwierdzić email:</p><br/>
        <a href="${tokenUrl}" title="Potwierdź swój adres email">Potwierdź swój adres email</a>`;
        return this.sendMail(recipient, subject, text, html);
    }
    async sendResetPasswordEmail(email, token) {
        const tokenUrl = `http://localhost:3333/reset-password/${token}`;
        const subject = 'DogGo - Zresetuj hasło';
        const text = `Please click on the link below to confirm your email address: ${token}`;
        const html = `<p>Kliknij, aby zresetować hasło:</p><br/>
        <a href="${tokenUrl}" title="Potwierdź swój adres email">Potwierdź swój adres email</a>`;
        await this.sendMail(email, subject, text, html);
        return {
            status: 'message sent',
        };
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map