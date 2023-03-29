// module.exports = {
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : null,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   entities: [__dirname + '/src/**/entities/*{.ts,.js}'],
//   migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
//
//   cli: {
//     entitiesDir: './src',
//     migrationsDir: './migrations',
//   },
//   // Timezone configured on the MySQL server.
//   // This is used to typecast server date/time values to JavaScript Date object and vice versa.
//   timezone: 'Z',
//   synchronize: false,
//   debug: process.env.NODE_ENV === 'development' ? true : false,
// };

import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : null,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: ["./src/**/entities/*{.ts,.js}"],
  migrations: ["./migrations/"],
  migrationsTableName: "typeorm_migrations",
  logger: "file",
  synchronize: true // never use TRUE in production!
});
export default dataSource;
