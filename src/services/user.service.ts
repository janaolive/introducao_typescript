import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import generateToken from '../middlewares/generateToken';

const UserService = {
  addUser: async (user: User) => {
    const { id, username } = await UserModel.addUser(user);
    const token = generateToken({ id, username });
    return { token };
  },
};

export default UserService;