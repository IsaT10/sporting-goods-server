"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const router = (0, express_1.Router)();
router.get('/', product_controller_1.getAllProducts);
router.post('/add-product', (0, validateRequest_1.default)(product_validation_1.createProductValidationSchema), product_controller_1.createProduct);
router.post('/place-order', product_controller_1.placeOrder);
router.get('/:id', product_controller_1.getSingleProduct);
router.patch('/:id', product_controller_1.updateProduct);
router.delete('/:id', product_controller_1.deleteProduct);
exports.default = router;
