import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const ProductRoutes = Router();

ProductRoutes.post('/', ProductController.addProduct);
ProductRoutes.get('/', ProductController.getAll);

export default ProductRoutes;