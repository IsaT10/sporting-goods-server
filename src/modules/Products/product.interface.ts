// import { Types } from 'mongoose';

export type TProduct = {
  name: string;
  description: string;
  // category: Types.ObjectId;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  price: number;
  image: string;
};
