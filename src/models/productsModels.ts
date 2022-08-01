import { ResultSetHeader } from 'mysql2';
import { Iproducts } from '../interfaces/productsInterface';
import connection from './connection';

const registerProductModels = async (product: Iproducts) => {
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

export default registerProductModels;
