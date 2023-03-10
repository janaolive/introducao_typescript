import { Router } from 'express';
import UserController from '../controllers/user.controller';

const UserRoutes = Router();

UserRoutes.post('/', UserController.addUser);

export default UserRoutes;