import { Request, Response } from 'express';
import OrderService from '../services/order.service';

const OrderController = {
  getAllOrders: async (_req: Request, res: Response) => {
    const orders = await OrderService.getAllOrders();
    res.json(orders);
  },
};

export default OrderController;
