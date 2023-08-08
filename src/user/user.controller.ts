import {
    Body,
    Controller,
    Get,
    Patch,
    UseGuards,
} from '@nestjs/common';
import { User, UserRole } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/decorator/roles.decorator';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
    ) {}
    @Get('me')
    getMe(@GetUser() user: User) {
        return user;
    }

    @Patch('me')
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
    @Roles(
        UserRole.Admin,
        UserRole.RegisteredUser,
    )
    @Get('all')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    //TODO: role guard for admin
    @Get(':userId')
    getUserById(userId: number) {
        return this.userService.getUserById(
            userId,
        );
    }

    //TODO: role guard for admin
    @Get('email/:email')
    getUserByEmail(email: string) {
        return this.userService.getUserByEmail(
            email,
        );
    }
}
