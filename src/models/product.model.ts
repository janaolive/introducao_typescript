import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/product.interface';

const ProductModel = {
  addProduct: async (product: Product) => {
    const { name, amount } = product;
    const [newProduct] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );
    return { id: newProduct.insertId, name, amount };
  },

  getAll: async () => {
    const [products] = await connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products;',
    );
    return products;
  },
};

// async getById(id: Product['id']): Promise<Product> {
//   const sql = 'SELECT id FROM Trybesmith.Products WHERE id = ?';
//   const [[row]] = await connection.query<RowDataPacket[]>(sql, [id]);
//   return row as Product;
// },

// async verifyExistence(id: Product['id']): Promise<boolean> {
//   const sql = 'SELECT 1 FROM Trybesmith.Products WHERE id = ?';
//   const [[row]] = await connection.query<RowDataPacket[]>(sql, [id]);
//   return !!row;
// },
export default ProductModel;