import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces/user.interface';
import connection from './connection';

const UserModel = {
  addUser: async (user: User) => {
    const { username, classe, level, password } = user;
    const [newUser] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password ) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
    return { id: newUser.insertId, username };
  },

};

export default UserModel;