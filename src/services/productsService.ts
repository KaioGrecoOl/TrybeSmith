import { Iproducts } from '../interfaces/productsInterface';
import { registerProductModels,
  getAllProductsModels } from '../models/productsModels';

export const registerProductService = async (products: Iproducts) => {
  const result = await registerProductModels(products);
  return result;
};

export const getAllProductsService = async () => {
  const data = await getAllProductsModels();
  return data;
};
