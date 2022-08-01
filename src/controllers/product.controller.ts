import { Request, Response } from 'express';
import { Product } from '../interfaces/product.interface';
import ProductService from '../services/product.service';

const ProductController = {
  addProduct: async (req: Request, res: Response) => {
    const product = req.body as Product;  
    
    const newProduct = await ProductService.addProduct(product);
    res.status(201).json(newProduct);
  },

  getAll: async (_req: Request, res: Response) => {
    const products = await ProductService.getAll();
    res.json(products);
  },
};

export default ProductController;
