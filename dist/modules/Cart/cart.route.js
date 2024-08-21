"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const cart_validation_1 = require("./cart.validation");
const cart_controller_1 = require("./cart.controller");
const router = (0, express_1.Router)();
router.get('/', cart_controller_1.getCartItems);
router.post('/', (0, validateRequest_1.default)(cart_validation_1.createCartValidationSchema), cart_controller_1.addToCart);
exports.default = router;
