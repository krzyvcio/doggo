import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

@Injectable()
export class DatabaseProviders {
}

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async (config: ConfigService) => {
      const dataSource = new DataSource({
        type: "postgres",
        host: config.get<string>("DB_HOST"),
        port: config.get<number>("DB_PORT"),
        database: config.get<string>("DB_NAME"),
        username: config.get<string>("DB_USER"),
        password: config.get<string>("DB_PASS"),

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
    },
    inject: [ConfigService]
  }
];
