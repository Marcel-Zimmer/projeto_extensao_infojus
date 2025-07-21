import { Model } from 'objection';

export class User extends Model {
  static tableName = 'users'; 

  id!: number;
  name!: string;
  email!: string;
  password!: string; 

  // (Opcional) Validação JSON Schema para o modelo
  static jsonSchema = {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 6 },
    },
  };
}