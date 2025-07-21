import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../knexfile';

const environment = process.env.NODE_ENV || 'development';
const connectionConfig = knexConfig[environment];

// Inicializa a conexão do Knex
const knex = Knex(connectionConfig);

// Conecta o Objection.js ao Knex
Model.knex(knex);

export default knex;