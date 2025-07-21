import type { Knex } from 'knex';
import * as dotenv from 'dotenv';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER || 'seu_usuario_postgres', 
      password: process.env.DB_PASSWORD || 'sua_senha_postgres', 
      database: process.env.DB_NAME || 'meu_banco_objection', 
    },
    migrations: {
      tableName: 'knex_migrations', // Tabela que o Knex usará para controlar as migrações
      directory: './src/database/migrations', // Onde suas migrações estarão
    },
    seeds: {
      directory: './src/database/seeds', 
    },
    pool: {
      min: 2,
      max: 10
    }
  },
};

export default config;