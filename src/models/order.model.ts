import { RowDataPacket } from 'mysql2';
import connection from './connection';

const OrderModel = {
  getAllOrders: async () => {
    const [orders] = await connection.execute<RowDataPacket[]>(
      ` SELECT ord.id, ord.userId, 
        JSON_ARRAYAGG(product.id) as productsIds
        FROM Trybesmith.Products as product
        LEFT JOIN Trybesmith.Orders as ord
        ON product.orderId = ord.id
        WHERE ord.id IS NOT NULL
        GROUP BY ord.id
        ORDER BY ord.userId;`,
    );
    return orders;
  },
};

export default OrderModel;
// fonte de pesquisa para query de agregação: 
// https://docs.yugabyte.com/preview/api/ysql/exprs/aggregate_functions/function-syntax-semantics/array-string-jsonb-jsonb-object-agg/
// https://www.pgcasts.com/episodes/generating-json-from-sql