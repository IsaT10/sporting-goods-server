"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCartValidationSchema = void 0;
const zod_1 = require("zod");
const createCartValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        productId: zod_1.z.string({ required_error: 'Product Id is required' }),
        quantity: zod_1.z.number({ required_error: 'Quantity is required' }),
    }),
});
exports.createCartValidationSchema = createCartValidationSchema;
