import { Request, Response, NextFunction } from 'express';
import { registerProductService, 
  getAllProductsService } from '../services/productsService';
import { Iproducts } from '../interfaces/productsInterface';

export const registerProducController = async (req: Request, res: Response, next: NextFunction) => {
  try { 
    const products = req.body as Iproducts;
    const data = await registerProductService(products);
    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAllProductsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await getAllProductsService();
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
