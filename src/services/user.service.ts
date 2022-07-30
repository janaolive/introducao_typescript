import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';

const UserService = {
  addUser: async (user: User) => {
    const newUser = await UserModel.addUser(user);
    return newUser;
  },
};

export default UserService;