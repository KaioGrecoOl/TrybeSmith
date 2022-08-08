import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IOrders } from '../interfaces/ordersInterface';

export const getAllOrdersModels = async (): Promise<IOrders[]> => {
  const [data] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Orders');
  return data as IOrders[];
};

export default getAllOrdersModels;
