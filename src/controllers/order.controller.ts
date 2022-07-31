import { Request, Response } from 'express';
import OrderService from '../services/product.service';

const OrderControler = {
  getAll: async (_req: Request, res: Response) => {
    const orders = await OrderService.getAll();
    res.json(orders);
  },
};

export default OrderControler;
