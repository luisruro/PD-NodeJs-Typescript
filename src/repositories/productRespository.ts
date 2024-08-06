import { injectable } from 'tsyringe';
import { Product } from '../models/product';


@injectable()
export default class ProductRepository { // here we created the Repository, this class will receive the information will call the sequelize methods needed to
    async findAll() { // this method will call findAll from sequelize
        return await Product.findAll();
    }

    async findById(id: number) { // this method will call findByPk from sequelize
        return await Product.findByPk(id);
    }

    async create(product: Partial<Product>) { // this method will call create from sequelize
        return await Product.create(product);
    }

    async update(id: number, product: Partial<Product>) { // this method will call findByPk and update from sequelize
        const existingProduct = await Product.findByPk(id);
        if (existingProduct) {
            return await existingProduct.update(product);
        }
        throw new Error('Product not found');
    }

    async deleteById(id: number) { // this method will call findByPk and destroy from sequelize
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            return;
        }
        throw new Error('Product not found');
    }
}