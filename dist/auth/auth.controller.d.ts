import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { User } from '@prisma/client';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: RegisterDto): Promise<{
        access_token: string;
    }>;
    signin(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    refreshToken(user: User): Promise<{
        access_token: string;
    }>;
}
