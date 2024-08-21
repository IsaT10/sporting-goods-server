import { Types } from 'mongoose';

export type TCart = {
  productId: Types.ObjectId;
  quantity: number;
};
