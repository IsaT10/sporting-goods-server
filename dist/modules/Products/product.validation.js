"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductValidationSchema = void 0;
const zod_1 = require("zod");
const createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }).trim(),
        brand: zod_1.z.string({ required_error: 'Brand is required' }).trim(),
        category: zod_1.z.string({ required_error: 'Category is required' }).trim(),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        image: zod_1.z.string({ required_error: 'Image is required' }),
        price: zod_1.z.number({ required_error: 'Price is required' }),
        rating: zod_1.z.number({ required_error: 'Rating is required' }),
        stock: zod_1.z.number({ required_error: 'Stock is required' }),
    }),
});
exports.createProductValidationSchema = createProductValidationSchema;
