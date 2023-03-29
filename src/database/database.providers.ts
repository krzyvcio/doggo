import { Injectable } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

@Injectable()
export class DatabaseProviders {
}

export const databaseProviders = [
  {
    inject: [ConfigService],
    imports: [ConfigModule],
    provide: "DATA_SOURCE",
    // provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: "postgres",
        host: configService.get<string>("DB_HOST"),
        port: configService.get<number>("DB_PORT"),
        database: configService.get<string>("DB_NAME"),
        username: configService.get<string>("DB_USER"),
        password: configService.get<string>("DB_PASS"),

        entities: [__dirname + "/../**/entities/*{.ts,.js}"],
        migrations: ["./migrations/"],
        migrationsTableName: "typeorm_migrations",
        logger: "file",
        synchronize: true // never use TRUE in production!
      });

      return dataSource.initialize();
    },
    dataSourceFactory: async (options) => {
      const dataSource = await new DataSource(options).initialize();
      return dataSource;
    }
  }
];
