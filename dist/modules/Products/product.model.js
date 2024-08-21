"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    // category: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Category',
    //   required: true,
    // },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true },
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)('Product', ProductSchema);
