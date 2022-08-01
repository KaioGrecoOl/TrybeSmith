import { ResultSetHeader } from 'mysql2';
import { Iproducts } from '../interfaces/productsInterface';
import connection from './connection';

export const registerProductModels = async (product: Iproducts) => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)',
    [name, amount],
  );
  return {
    id: insertId,
    name, 
    amount,
  };
};

export const getAllProductsModels = async (): Promise<Iproducts> => {
  const [data] = await connection.execute<ResultSetHeader>('SELECT * FROM Trybesmith.products');
  return data as unknown as Iproducts;
};
