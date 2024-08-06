import { injectable } from 'tsyringe';
import { Product } from '../models/product';


@injectable()
export default class ProductRepository { // Repository is created, it will receive the information to call the sequelize methods
    async findAll() { // this method call findAll from sequelize
        return await Product.findAll();
    }

    async findById(id: number) { // this method call findByPk from sequelize
        return await Product.findByPk(id);
    }

    async create(product: Partial<Product>) { // this method call create from sequelize
        return await Product.create(product);
    }

    async update(id: number, product: Partial<Product>) { // this method call findByPk and update from sequelize
        const existingProduct = await Product.findByPk(id);
        if (existingProduct) {
            return await existingProduct.update(product);
        }
        throw new Error('Product not found');
    }

    async deleteById(id: number) { // this method call findByPk and destroy from sequelize
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            return;
        }
        throw new Error('Product not found');
    }
}