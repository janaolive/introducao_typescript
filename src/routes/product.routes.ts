import express from 'express';
import ProductController from '../controllers/product.controller';

const ProductRoutes = express.Router();

ProductRoutes.post('/', ProductController.addProduct);
ProductRoutes.get('/', ProductController.getAll);

export default ProductRoutes;