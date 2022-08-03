import { Request, Response, NextFunction } from 'express';
import createUserService from '../services/usersService';
import { Iusers } from '../interfaces/usersInterface';

const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try { 
    const { username, classe, level, password }: Iusers = req.body;
    const token = await createUserService({ username, classe, level, password });
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
export default createUserController;