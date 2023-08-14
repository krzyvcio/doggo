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
import { AppLogger } from '../shared/logger/logger.service';
import { ReqContext } from '../shared/request-context/req-context.decorator';
import { RequestContext } from '../shared/request-context/request-context.dto';
import {
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private readonly logger: AppLogger,
    ) {
        this.logger.setContext(
            AuthController.name,
        );
    }

    @ApiOperation({
        summary: 'User registration API',
    })
    @ApiResponse({
        status: HttpStatus.CREATED,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
    })
    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    async register(
        @ReqContext() ctx: RequestContext,
        @Body() dto: RegisterDto,
    ) {
        this.logger.log(
            ctx,
            'register controller',
        );
        return await this.authService.register(
            ctx,
            dto,
        );
    }

    @ApiOperation({
        summary: 'User login API',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'User login successful',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Invalid credentials',
    })
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(
        @ReqContext() ctx: RequestContext,
        @Body() dto: LoginDto,
    ) {
        this.logger.log(ctx, 'login controller');
        return this.authService.login(ctx, dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('refreshToken')
    @UseGuards(JwtGuard)
    async refreshToken(
        @ReqContext() ctx: RequestContext,
        @GetUser() user: User,
    ) {
        return this.authService.signToken(
            user.id,
            user.email,
            user.roles,
        );
    }
}
