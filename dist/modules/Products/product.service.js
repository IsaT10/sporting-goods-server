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
exports.placeOrdersInDB = exports.deleteProductFromDB = exports.updateProductIntoDB = exports.getSingleProductFromDB = exports.getAllProductsFromDB = exports.createProductIntoDB = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const appError_1 = __importDefault(require("../../error/appError"));
const product_model_1 = require("./product.model");
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
exports.createProductIntoDB = createProductIntoDB;
const getAllProductsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchableFields = ['name'];
    // Create a base query with search and filter applied
    const queryBuilder = new QueryBuilder_1.default(product_model_1.Product.find(), query)
        .search(searchableFields)
        .filter();
    // Clone the conditions from the query builder for a separate count query
    const countConditions = Object.assign({}, queryBuilder.queryModel.getQuery());
    // Create a separate query instance for counting documents
    const totalProduct = yield product_model_1.Product.countDocuments(countConditions);
    // Apply fields, sorting, and pagination to the main query builder
    queryBuilder.fields().sort().pagination();
    const products = yield queryBuilder.queryModel;
    return { totalProduct, products };
});
exports.getAllProductsFromDB = getAllProductsFromDB;
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    if (!result) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'Product not found!');
    }
    return result;
});
exports.getSingleProductFromDB = getSingleProductFromDB;
const updateProductIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'Product not found!');
    }
    return result;
});
exports.updateProductIntoDB = updateProductIntoDB;
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    if (!result) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'Product not found!');
    }
    return result;
});
exports.deleteProductFromDB = deleteProductFromDB;
const placeOrdersInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const orderItems = payload; // Expecting an array of objects with id and quantity
    // Iterate through each item and reduce the stock
    const bulkOps = orderItems.map((item) => ({
        updateOne: {
            filter: { _id: item.id }, // Find the product by ID
            update: { $inc: { stock: -item.quantity } }, // Decrease the stock
        },
    }));
    // Perform the bulk operation
    yield product_model_1.Product.bulkWrite(bulkOps);
});
exports.placeOrdersInDB = placeOrdersInDB;
