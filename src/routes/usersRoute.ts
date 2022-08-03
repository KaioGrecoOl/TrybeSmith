import { Router } from 'express';
import createUserController from '../controllers/usersControllers';

const routerUser = Router();

routerUser.post('/users', createUserController);

export default routerUser;
