import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { createCartValidationSchema } from './cart.validation';
import { addToCart, getCartItems } from './cart.controller';

const router = Router();

router.get('/', getCartItems);
router.post('/', validateRequest(createCartValidationSchema), addToCart);

export default router;
