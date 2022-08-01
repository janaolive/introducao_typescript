import OrderModel from '../models/order.model';

const OrderService = {
  getAllOrders: async () => {
    const orders = await OrderModel.getAllOrders();
    return orders;
  },
};

export default OrderService;