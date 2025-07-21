import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
  static async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const newUser = await UserService.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}