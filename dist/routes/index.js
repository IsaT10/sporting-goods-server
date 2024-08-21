"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = __importDefault(require("../modules/User/user.route"));
const product_route_1 = __importDefault(require("../modules/Products/product.route"));
const category_route_1 = __importDefault(require("../modules/Category/category.route"));
const cart_route_1 = __importDefault(require("../modules/Cart/cart.route"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    { path: '/users', route: user_route_1.default },
    { path: '/products', route: product_route_1.default },
    { path: '/categories', route: category_route_1.default },
    { path: '/carts', route: cart_route_1.default },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
