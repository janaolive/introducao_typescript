import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const OrderRoutes = Router();

OrderRoutes.get('/', OrderController.getAllOrders);

export default OrderRoutes;