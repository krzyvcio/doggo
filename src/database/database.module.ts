import { DynamicModule, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { databaseProviders } from "./database.providers";

@Module({
  imports: [
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
