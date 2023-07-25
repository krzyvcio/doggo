import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { STRATEGY_JWT_AUTH } from '../constants/strategy.constant';
import { UserAccessTokenClaims } from '../dtos/auth-token-output.dto';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(
    Strategy,
    STRATEGY_JWT_AUTH,
) {
    constructor(private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>('JWT_PUBLIC_KEY_BASE64'),
            algorithms: ['RS256'],
        });
    }

    async validate(payload: any): Promise<UserAccessTokenClaims> {
        // Passport automatically creates a user object, based on the value we return from the validate() method,
        // and assigns it to the Request object as req.user
        return {
            id: payload.sub,
            username: payload.username,
            roles: payload.roles,
        };
    }
}
