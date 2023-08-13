import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Query,
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
    ApiOperation,
    ApiResponse,
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
    @ApiOperation({
        summary: 'Get current user',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    @HttpCode(HttpStatus.OK)
    @Roles(
        UserRole.Admin,
        UserRole.RegisteredUser,
    )
    async getMe(@GetUser() user: User) {
        return user;
    }

    @Patch('me')
    @UseGuards(JwtGuard, RolesGuard)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Update current user',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    @Roles(UserRole.RegisteredUser)
    async editUser(
        @GetUser('id') userId: number,
        @Body() dto: EditUserDto,
    ) {
        return this.userService.editUser(
            userId,
            dto,
        );
    }

    //update user by id param
    @Patch('updateUser/:userId')
    @UseGuards(JwtGuard, RolesGuard)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Update user by id',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    @Roles(UserRole.Admin)
    async editUserById(
        @Param('userId') userId: string,
        @Body() dto: EditUserDto,
    ) {
        return await this.userService.editUser(
            +userId,
            dto,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get all users',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    @Get('all')
    getAllUsers(
        @Query('limit') limit?: number,
        @Query('offset') offset?: number,
        @Query('firstName') firstName?: string,
        @Query('lastName') lastName?: string,
    ) {
        return this.userService.getAllUsers(
            limit,
            offset,
            firstName,
            lastName,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Get user by id',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    @HttpCode(HttpStatus.OK)
    @Get('id/:userId')
    getUserById(userId: number) {
        return this.userService.getUserById(
            userId,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get user by email',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    @Get('email/')
    getUserByEmail(
        @Query()
        email: string,
    ) {
        return this.userService.getUserByEmail(
            email,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Delete(':id')
    @ApiOperation({
        summary: 'Delete user by id',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    async deleteUserById(
        @Param('id') id: string,
    ) {
        return await this.userService.deleteUser(
            +id,
        );
    }
}
