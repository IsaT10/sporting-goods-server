"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCartItemFromDB = exports.createCartItemIntoDB = void 0;
const http_status_1 = __importDefault(require("http-status"));
const appError_1 = __importDefault(require("../../error/appError"));
const product_model_1 = require("../Products/product.model");
const cart_model_1 = require("./cart.model");
const mongoose_1 = __importDefault(require("mongoose"));
const createCartItemIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = payload;
    const product = yield product_model_1.Product.findById(productId);
    if (!product) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'Product not found!');
    }
    let result;
    const cartItem = yield cart_model_1.Cart.findOne({ productId });
    if (!cartItem) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'Product is not added in cart!');
    }
    // check cart item quantity
    if (quantity > product.stock) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, 'Insuffient product');
    }
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        if (cartItem) {
            // If the product is already in the cart, update the quantity
            result = yield cart_model_1.Cart.findOneAndUpdate(cartItem._id, {
                quantity: cartItem.quantity + quantity,
            }, { new: true, session });
        }
        else {
            // If the product is not in the cart, add it
            result = yield cart_model_1.Cart.create(payload, { session });
        }
        yield product_model_1.Product.findByIdAndUpdate(productId, {
            stock: product.stock - quantity,
        }, { new: true });
        yield session.commitTransaction();
        yield session.endSession();
        return result;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new appError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Failed to add products in cart!');
    }
});
exports.createCartItemIntoDB = createCartItemIntoDB;
const getAllCartItemFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.find();
    return result;
});
exports.getAllCartItemFromDB = getAllCartItemFromDB;
