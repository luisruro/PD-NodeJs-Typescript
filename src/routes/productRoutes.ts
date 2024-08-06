import { Router } from 'express';
import ProductController from '../constrolllers/productController';


export const productRouter = Router();

try {
    productRouter.get('/', ProductController.getAllProducts);
    productRouter.get('/:id', ProductController.getProductsById);
    productRouter.post('/', ProductController.createProducts);
    productRouter.put('/:id', ProductController.updateProducts);
    productRouter.delete('/:id', ProductController.deleteProducts);
    
} catch (error) {
    throw new Error(`An error occurred: ${error}`);
}