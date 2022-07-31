import express from 'express';
import OrderController from '../controllers/order.controller';

const OrderRoutes = express.Router();

OrderRoutes.get('/', OrderController.getAll);

export default OrderRoutes;