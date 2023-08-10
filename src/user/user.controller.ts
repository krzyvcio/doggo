import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    UseGuards,
} from '@nestjs/common';
import { User, UserRole } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/decorator';
import {
    ApiBearerAuth,
    ApiTags,
} from '@nestjs/swagger';

@UseGuards(JwtGuard)
@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
    ) {}

    @Get('me')
    @UseGuards(JwtGuard, RolesGuard)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Roles(
        UserRole.Admin,
        UserRole.RegisteredUser,
    )
    getMe(@GetUser() user: User) {
        return user;
    }

    @Patch('updateUser')
    @UseGuards(JwtGuard, RolesGuard)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Roles(
        UserRole.Admin,
        UserRole.RegisteredUser,
    )
    editUser(
        @GetUser('id') userId: number,
        @Body() dto: EditUserDto,
    ) {
        return this.userService.editUser(
            userId,
            dto,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Get('all')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Get(':userId')
    getUserById(userId: number) {
        return this.userService.getUserById(
            userId,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Get('email/:email')
    getUserByEmail(email: string) {
        return this.userService.getUserByEmail(
            email,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Get('delete/:id')
    async deleteUserById(
        @Param('id') id: string,
    ) {
        return await this.userService.deleteUser(
            +id,
        );
    }
}
