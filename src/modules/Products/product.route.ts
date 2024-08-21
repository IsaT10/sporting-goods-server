import { Router } from 'express';

import validateRequest from '../../middleware/validateRequest';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  placeOrder,
  updateProduct,
} from './product.controller';
import { createProductValidationSchema } from './product.validation';

const router = Router();

router.get('/', getAllProducts);
router.post(
  '/add-product',
  validateRequest(createProductValidationSchema),
  createProduct
);

router.post('/place-order', placeOrder);

router.get('/:id', getSingleProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
