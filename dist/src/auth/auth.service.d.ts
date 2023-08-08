import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserEmailConfirmationService } from 'src/user-email-confirmation/user-email-confirmation.service';
import { EmailService } from 'src/email/email.service';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    private userConfirmationService;
    private emailService;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService, userConfirmationService: UserEmailConfirmationService, emailService: EmailService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
    refreshToken(user: User): Promise<{
        access_token: string;
    }>;
    logout(): Promise<{
        message: string;
    }>;
}
