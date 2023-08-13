import {
    Controller,
    HttpCode,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
    ApiOperation,
    ApiResponse,
} from '@nestjs/swagger';
import * as fs from 'fs';

@Controller('upload')
export class UploadController {
    @Post()
    @ApiOperation({ summary: 'Upload image' })
    @ApiResponse({
        status: 200,
        description: 'Upload image',
    })
    @HttpCode(200)
    @UseInterceptors(
        FileInterceptor('file', {
            dest: './uploads', // Corrected destination directory
            fileFilter(
                req: any,
                file: {
                    fieldname: string;
                    originalname: string;
                    encoding: string;
                    mimetype: string;
                    size: number;
                    destination: string;
                    filename: string;
                    path: string;
                    buffer: Buffer;
                },
                callback: (
                    error: Error | null,
                    acceptFile: boolean,
                ) => void,
            ) {
                //preserve file extension
                const extension =
                    file.originalname
                        .split('.')
                        .pop();
                const randomName = Array(32)
                    .fill(null)
                    .map(() =>
                        Math.round(
                            Math.random() * 16,
                        ).toString(16),
                    )
                    .join('');
                file.filename = `${randomName}.${extension}`;

                // Example implementation:
                if (
                    !file.originalname.match(
                        /\.(jpg|jpeg|png)$/,
                    )
                ) {
                    // Reject file if it's not an image (jpg, jpeg, png)
                    callback(
                        new Error(
                            'Only image files are allowed',
                        ),
                        false,
                    );
                } else if (
                    file.size >
                    1024 * 1024 * 10
                ) {
                    // Reject file if it's larger than 10MB
                    callback(
                        new Error(
                            'File size exceeds 10MB',
                        ),
                        false,
                    );
                } else {
                    // Accept the file
                    callback(null, true);
                }
            },
        }),
    )
    uploadFile(
        @UploadedFile() file: Express.Multer.File,
    ) {
        if (!file)
            return {
                message: 'No file uploaded',
                image: null,
            };
        console.log(file);
        return {
            image: file.filename,
        };
    }
}
