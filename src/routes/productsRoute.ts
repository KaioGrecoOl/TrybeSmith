import { Router } from 'express';
import { registerProducController, 
  getAllProductsController } from '../controllers/productsController';

const router = Router();

router.post('/products', registerProducController);
router.get('/products', getAllProductsController);

export default router;
