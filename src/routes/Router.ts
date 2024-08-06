import { Router } from 'express';
import {  userRouter } from './userRoutes';
import { productRouter } from './productRoutes';

const router = Router();


router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;