import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: number;
        email: string;
    }): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        phone: string;
        roles: import(".prisma/client").UserRole[];
        firstName: string;
        lastName: string;
        image: string;
        dogOwnerProfileId: number;
        dogWalkerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
        isEmailConfirmed: boolean;
        isUserDeleted: boolean;
    }, unknown, never> & {}>;
}
export {};
