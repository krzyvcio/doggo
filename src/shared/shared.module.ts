import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configModuleOptions } from './configs/module-options';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { AppLoggerModule } from './logger/logger.module';

@Module({
    imports: [
        ConfigModule.forRoot(configModuleOptions),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            // eslint-disable-next-line @typescript-eslint/require-await
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                database: configService.get<string>('DB_NAME'),
                username: configService.get<string>('DB_USER'),
                password: configService.get<string>('DB_PASS'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                //migrations: [[__dirname + '/migrations/*{.ts,.js}']],
                // Timezone configured on the MySQL server.
                // This is used to typecast server date/time values to JavaScript Date object and vice versa.
                timezone: 'Z',
                synchronize: false,
                migrationsRun: true,
                debug: configService.get<string>('APP_ENV') === 'development',
            }),
        }),
        AppLoggerModule,
    ],
    exports: [AppLoggerModule, ConfigModule],
    providers: [
        { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },

        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
    ],
})
export class SharedModule {}
