import jwt, { SignOptions } from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();

const options: SignOptions = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const createToken = (username: string) => {
  const token = jwt.sign({ username }, 'secret' as string, options);
  return token;
};

export default createToken;
