"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// src/data-source.ts
const typeorm_1 = require("typeorm");
const Patient_1 = require("./entities/Patient");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos',
    synchronize: true,
    logging: false,
    entities: [Patient_1.Patient],
    subscribers: [],
    migrations: [],
});
