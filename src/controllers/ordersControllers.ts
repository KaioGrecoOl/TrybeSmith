import { Request, Response, NextFunction } from 'express';
import getAllOrdersServices from '../services/ordersService';

const getAllOrdersControler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await getAllOrdersServices();
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export default getAllOrdersControler;
