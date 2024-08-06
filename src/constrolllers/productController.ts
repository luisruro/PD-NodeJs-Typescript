import { Request, Response } from 'express'; 
import { container } from 'tsyringe'; 
import ProductService from '../services/productService';




export default class ProductController { 
    static async getAllProducts(_: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.getAllProducts();
            if (!products) return res.status(404).json({
                message: "Product not found"
            });
            res.status(200).json({message: "products found", data: products})

        } catch (error) {
            res.status(500).json({
                message: `Somenthing went wrong getting products`,
                error: error
            })
        }
    }

    static async getProductsById(req: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.getProductsById(parseInt(req.params.id));
            if (!products) return res.status(404).json({
                message: "Product not found"
            });
            res.status(200).json({message: "product found", data: products})

        } catch (error) {
            res.status(500).json({
                message: `Somenthing went wrong getting product by ID`,
                error: error
            })
        }
    }
    
    static async createProducts(req: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            
            const products = await productService.createProducts(req.body);
            products.toJSON();
            res.status(201).json({message: "product has been created successfully", data: products})

        } catch (error) {
            res.status(400).json({
                message: `Somenthing went wrong creating product`,
                error: error
            })
        }
    }

    static async updateProducts(req: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.updateProducts(parseInt(req.params.id), req.body);
            res.status(200).json({message: "product has been updated successfully", data: products});
        } catch (error) {
            res.status(404).json({
                message: `Somenthing went wrong updating product`,
                error: error
            })
        }
    }

    static async deleteProducts(req: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.deleteProducts(parseInt(req.params.id));
            res.status(200).json({message: "product has been deleted successfully", data: products});
        } catch (error) {
            res.status(404).json({
                message: `Somenthing went wrong deleting product`,
                error: error
            })
        }
    }
}