import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv";
import { User, Product } from '../models';

dotenv.config();

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [User, Product]
});

export default sequelize;