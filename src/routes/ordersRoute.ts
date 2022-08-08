import { Router } from 'express';
import getAllOrdersServices from '../controllers/ordersControllers';

const routerOrders = Router();

routerOrders.get('/orders', getAllOrdersServices);

export default routerOrders;
