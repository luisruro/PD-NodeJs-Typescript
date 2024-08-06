import { Request, Response } from 'express'; 
import { container } from 'tsyringe'; 
import ProductService from '../services/productService';




export default class ProductController { 
    static async getAllProducts(_: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.getAllProducts();
            if (!products) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(products)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getProductsById(req: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.getProductsById(parseInt(req.params.id));
            if (!products) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(products)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createProducts(req: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            
            const products = await productService.createProducts(req.body);
            console.log(products.toJSON());
            res.status(201).json(products)

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updateProducts(req: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.updateProducts(parseInt(req.params.id), req.body);
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deleteProducts(req: Request, res: Response) { 
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.deleteProducts(parseInt(req.params.id));
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}