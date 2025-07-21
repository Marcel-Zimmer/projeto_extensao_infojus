import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);

export default router;