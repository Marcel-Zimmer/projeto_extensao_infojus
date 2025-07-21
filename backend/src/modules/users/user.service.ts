import { User } from './user.model';
// Lembre-se de implementar o hash de senhas!
// import bcrypt from 'bcrypt';

export class UserService {
  static async findAll(): Promise<User[]> {
    return await User.query();
  }

  static async findById(id: number): Promise<User | undefined> {
    return await User.query().findById(id);
  }

  static async create(data: Partial<User>): Promise<User> {
    // Exemplo de lógica de negócio (hash da senha antes de salvar)
    // const salt = await bcrypt.genSalt(10);
    // data.password = await bcrypt.hash(data.password, salt);
    return await User.query().insert(data);
  }
}