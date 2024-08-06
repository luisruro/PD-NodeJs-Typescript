import { injectable, inject } from 'tsyringe';
import ProductRepository from '../repositories/productRespository';
import { Product } from '../models';

@injectable()
export default class ProductService { 
    constructor(@inject(ProductRepository) private productRepository: ProductRepository) {}

    async getAllProducts() { 
        return await this.productRepository.findAll();
    }

    async getProductsById(id: number) { 
        return await this.productRepository.findById(id);
    }

    async createProducts(product: Partial<Product>) { 
        console.log(2);
        return await this.productRepository.create(product);
    }

    async updateProducts(id: number, product: Partial<Product>) { 
        return await this.productRepository.update(id, product);
    }

    async deleteProducts(id: number) { 
        return await this.productRepository.deleteById(id);
    }
}