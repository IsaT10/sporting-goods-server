import httpStatus from 'http-status';
import AppError from '../../error/appError';
import { Product } from '../Products/product.model';
import { Cart } from './cart.model';
import { TCart } from './cart.interface';
import mongoose from 'mongoose';

const createCartItemIntoDB = async (payload: TCart) => {
  const { productId, quantity } = payload;

  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found!');
  }

  let result;

  const cartItem = await Cart.findOne({ productId });

  if (!cartItem) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product is not added in cart!');
  }

  // check cart item quantity
  if (quantity > product.stock) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Insuffient product');
  }
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    if (cartItem) {
      // If the product is already in the cart, update the quantity
      result = await Cart.findOneAndUpdate(
        cartItem._id,
        {
          quantity: cartItem.quantity + quantity,
        },
        { new: true, session }
      );
    } else {
      // If the product is not in the cart, add it
      result = await Cart.create(payload, { session });
    }

    await Product.findByIdAndUpdate(
      productId,
      {
        stock: product.stock - quantity,
      },
      { new: true }
    );

    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();

    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to add products in cart!'
    );
  }
};

const getAllCartItemFromDB = async () => {
  const result = await Cart.find();

  return result;
};

export { createCartItemIntoDB, getAllCartItemFromDB };
