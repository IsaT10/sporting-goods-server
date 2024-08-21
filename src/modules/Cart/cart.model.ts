import { Schema, model } from 'mongoose';
import { TCart } from './cart.interface';

const cartSchema = new Schema<TCart>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: { type: Number, required: true },
});

export const Cart = model<TCart>('Cart', cartSchema);
