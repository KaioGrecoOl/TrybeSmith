import { Iproducts } from '../interfaces/productsInterface';
import registerProductModels from '../models/productsModels';

const registerProductService = async (products: Iproducts) => {
  const result = await registerProductModels(products);
  return result;
};

export default registerProductService;
