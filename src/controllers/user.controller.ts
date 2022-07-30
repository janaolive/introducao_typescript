import { Request, Response } from 'express';
import { User } from '../interfaces/user.interface';
import UserService from '../services/user.service';

const UserController = {
  addUser: async (req: Request, res: Response) => {
    const user = req.body as User;  
        
    const newUser = await UserService.addUser(user);
    res.status(201).json(newUser);
  },
};

export default UserController;