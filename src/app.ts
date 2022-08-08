import express from 'express';
import router from './routes/productsRoute';
import routerUser from './routes/usersRoute';
import routerOrders from './routes/ordersRoute';

const app = express();

app.use(express.json());
app.use(router);
app.use(routerUser);
app.use(routerOrders);

export default app;
