import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(
        AppModule,
    );

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );

    const config = app.get(ConfigService);
    const port = config.get('PORT') || 3333;

    await app.listen(port);
}

bootstrap();
