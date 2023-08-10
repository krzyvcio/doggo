import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
    DocumentBuilder,
    SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(
        AppModule,
    );

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );

    //add cors
    app.enableCors();

    //add swagger
    const configSwagger = new DocumentBuilder()
        .setTitle('DogsGo App')
        .setDescription(
            'A on-demand service for dog walking/pet care that connects local' +
                ' dog walkers and caregivers with pet owners through a user-friendly' +
                ' application. Owners can request walks, playtime, feeding, etc. for ' +
                'their dogs whenever they need it.',
        )
        .setVersion('1.0')
        .addTag('dog-walking-app')
        .build();
    const document = SwaggerModule.createDocument(
        app,
        configSwagger,
    );
    SwaggerModule.setup('api', app, document);

    const config = app.get(ConfigService);
    const port = config.get('PORT') || 3333;

    await app.listen(port);
}

bootstrap();
