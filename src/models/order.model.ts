import { RowDataPacket } from 'mysql2';
import connection from './connection';

const OrderModel = {
  getAll: async () => {
    const [orders] = await connection.execute<RowDataPacket[]>(
      `SELECT ord.id, ord.userId, 
        JSON_ARRAYAGG(product.id) as prodIds
         FROM Trybesmith.Orders as ord
        INNER JOIN Trybesmith.Products as product
         ON product.orderId = ord.id
        GROUP BY ord.id
        ORDER BY ord.userId;`,
    );
    return orders;
  },
};

export default OrderModel;