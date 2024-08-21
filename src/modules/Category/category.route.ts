import { Router } from 'express';

import {
  createCatgory,
  getAllCategory,
  getSingleCategory,
} from './category.controller';
import validateRequest from '../../middleware/validateRequest';
import { createCategoryValidationSchema } from './category.validation';

const router = Router();

router.get('/', getAllCategory);
router.post(
  '/create-category',
  validateRequest(createCategoryValidationSchema),
  createCatgory
);

router.get('/:id', getSingleCategory);

export default router;
