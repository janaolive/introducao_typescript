import express from 'express';
import OrderRoutes from './routes/order.routes';
import ProductRoutes from './routes/product.routes';
import UserRoutes from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductRoutes);
app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);

export default app;
