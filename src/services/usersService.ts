import { Iusers } from '../interfaces/usersInterface';
import createUserModels from '../models/usersModels';
import createToken from '../helpers/jwt.helper';

const createUserService = async (user: Iusers) => {
  const { username } = await createUserModels(user);
  const token = createToken(username);
  return token;
};

export default createUserService;
