import { Request, Response, NextFunction } from 'express';
import registerProductService from '../services/productsService';
import { Iproducts } from '../interfaces/productsInterface';

const registerProducController = async (req: Request, res: Response, next: NextFunction) => {
  try { 
    const products = req.body as Iproducts;
    const data = await registerProductService(products);
    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export default registerProducController;
