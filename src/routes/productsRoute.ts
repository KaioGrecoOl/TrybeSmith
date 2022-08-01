import { Router } from 'express';
import registerProductController from '../controllers/productsController';

const router = Router();

router.post('/products', registerProductController);

export default router;
