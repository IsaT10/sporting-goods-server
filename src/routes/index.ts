import { Router } from 'express';
import userRoute from '../modules/User/user.route';
import productRoute from '../modules/Products/product.route';
import categoryRoute from '../modules/Category/category.route';
import cartRoute from '../modules/Cart/cart.route';

const router = Router();
const moduleRoutes = [
  { path: '/users', route: userRoute },
  { path: '/products', route: productRoute },
  { path: '/categories', route: categoryRoute },
  { path: '/carts', route: cartRoute },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
