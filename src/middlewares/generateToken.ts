import jwt from 'jsonwebtoken';

const secret = 'socorrodeus';

const generateToken = (data: object) => {
  const token = jwt.sign(data, secret, {
    expiresIn: '8h', 
    algorithm: 'HS256',
  });
  return token;
};

export default generateToken;