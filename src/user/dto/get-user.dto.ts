import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
    @IsString()
    @ApiProperty({
        description: 'User ID',
    })
    id: string;

    @IsString()
    @ApiProperty({
        description: 'User email',
    })
    email: string;

    @IsString()
    @ApiProperty({
        description: 'User first name',
    })
    firstName: string;

    @IsString()
    @ApiProperty({
        description: 'User last name',
    })
    lastName: string;

    @IsString()
    @ApiProperty({
        description: 'User phone number',
    })
    phone: string;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
