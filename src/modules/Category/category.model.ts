import { Schema, model } from 'mongoose';
import { TCategory } from './category.interface';

const categorySchema = new Schema<TCategory>(
  {
    name: { type: String, required: true, trim: true },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

categorySchema.virtual('products', {
  ref: 'Product',
  foreignField: 'category',
  localField: '_id',
});

export const Category = model<TCategory>('Category', categorySchema);
