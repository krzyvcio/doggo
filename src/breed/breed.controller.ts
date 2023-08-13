import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { JwtGuard } from '../auth/guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/decorator/roles.decorator';
import { UserRole } from '@prisma/client';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags('breed')
@Controller('breed')
export class BreedController {
    constructor(
        private readonly breedService: BreedService,
    ) {}

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Create breed',
    })
    @ApiOperation({
        summary: 'Create breed',
    })
    @ApiResponse({
        status: HttpStatus.CREATED,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    async create(
        @Body() createBreedDto: CreateBreedDto,
    ) {
        return await this.breedService.create(
            createBreedDto,
        );
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get all breeds',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    async findAll(
        @Query('limit') limit?: string,
        @Query('offset') offset?: string,
        @Query('name') name?: string,
    ) {
        return this.breedService.findAll(
            limit ? +limit : undefined,
            offset ? +offset : undefined,
            name ? name : undefined,
        );
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get breed by id',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
    })
    async findOne(@Param('id') id: string) {
        return await this.breedService.findOne(
            +id,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Update breed by id',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
    })
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateBreedDto: UpdateBreedDto,
    ) {
        return await this.breedService.update(
            +id,
            updateBreedDto,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Delete breed by id',
    })
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
    })
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.breedService.remove(
            +id,
        );
    }
}
