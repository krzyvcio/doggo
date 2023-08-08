import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { GetUser } from './decorator';
import { User } from '@prisma/client';

import { JwtGuard } from './guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {}

    @Post('register')
    signup(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signin(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('refreshToken')
    @UseGuards(JwtGuard)
    async refreshToken(@GetUser() user: User) {
        return this.authService.signToken(
            user.id,
            user.email,
        );
    }
}
