"use strict";
exports.__esModule = true;
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: '0.0.0.0',
    port: 5432,
    username: 'postgres',
    password: 'rjs87rx',
    database: 'nest_js_example',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/src/**/entities/*{.ts,.js}'],
    migrations: ["".concat(__dirname, "/migrations/**/*{.ts,.js}")],
    subscribers: []
});
