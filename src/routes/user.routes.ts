import express from 'express';
import UserController from '../controllers/user.controller';

const UserRoutes = express.Router();

UserRoutes.post('/', UserController.addUser);

export default UserRoutes;