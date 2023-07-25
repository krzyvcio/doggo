import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { CreatePasswordResetDto } from './dto/create-password-reset.dto';
import { UpdatePasswordResetDto } from './dto/update-password-reset.dto';
import { PasswordResetService } from './password-reset.service';

@Controller('password-reset')
export class PasswordResetController {
    constructor(private readonly passwordResetService: PasswordResetService) {}

    @Post()
    create(@Body() createPasswordResetDto: CreatePasswordResetDto) {
        return this.passwordResetService.create(createPasswordResetDto);
    }

    @Get()
    findAll() {
        return this.passwordResetService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.passwordResetService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updatePasswordResetDto: UpdatePasswordResetDto,
    ) {
        return this.passwordResetService.update(+id, updatePasswordResetDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.passwordResetService.remove(+id);
    }
}
