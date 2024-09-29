// src/data-source.ts
import { DataSource } from 'typeorm';
import { Patient } from './entities/Patient';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos',
  synchronize: true,
  logging: false,
  entities: [Patient],
  subscribers: [],
  migrations: [],
});