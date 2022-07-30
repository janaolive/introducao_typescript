import { Product } from '../interfaces/product.interface';
import ProductModel from '../models/product.model';

const ProductService = {
  addProduct: async (product: Product) => {
    const newProduct = await ProductModel.addProduct(product);
    return newProduct;
  },
};

// async getAll(): Promise<Product[]> {
//   const products = await ProductModel.getAll();
//   return products;
// },
// async getById(id: Product['id']): Promise<Product> {
//   const product = await ProductModel.getById(id);
//   return product;
// },
// async verifyExistence(id: Product['id']): Promise<void> {
//   const existing = await ProductModel.verifyExistence(id);
//   if (!existing) throw new NotFoundError('"product" not found.'); 
// },
// async create(product: Product): Promise<Product> {
// return this.model.create(product);
// }

export default ProductService;