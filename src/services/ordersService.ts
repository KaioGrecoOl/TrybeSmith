import { getAllOrdersModels } from '../models/ordersModels';
import { getAllProductsModels } from '../models/productsModels';
import { IOrders } from '../interfaces/ordersInterface';

const getAllOrdersServices = async () => {
  const orders = await getAllOrdersModels();
  const products = await getAllProductsModels();
  const data = orders.map((ord) => {
    const order: IOrders = { id: ord.id, userId: ord.userId, productsIds: ord.productsIds };
    const result = products.filter((prod) => {
      if (prod.orderId === ord.id) {
        return prod.id;
      }
      return null;
    });
    // console.log(result);
    const productsIdArray = result.map((resul) => resul.id);
    // console.log(productsIdArray);
    order.productsIds = productsIdArray as [];
    return order;
  });
  return data;
};

export default getAllOrdersServices;
