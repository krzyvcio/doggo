import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { databaseProviders } from "./database.providers";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true
    })
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {
  static forRoot(entities = [], options?): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [...databaseProviders],
      exports: [...databaseProviders]
    };
  }
}
