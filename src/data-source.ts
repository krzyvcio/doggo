import 'reflect-metadata';

import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: '0.0.0.0',
    port: 5432,
    username: 'postgres',
    password: 'rjs87rx',
    database: 'nest_js_example',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/src/**/entities/*{.ts,.js}'],
    migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
    subscribers: [],
});
