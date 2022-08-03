import express from 'express';
import router from './routes/productsRoute';
import routerUser from './routes/usersRoute';

const app = express();

app.use(express.json());
app.use(router);
app.use(routerUser);

export default app;
