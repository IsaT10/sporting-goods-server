import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { createCartItemIntoDB, getAllCartItemFromDB } from './cart.service';

const addToCart = catchAsync(async (req: Request, res: Response) => {
  const data = await createCartItemIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category create succefully',
    data,
  });
});

const getCartItems = catchAsync(async (req: Request, res: Response) => {
  const data = await getAllCartItemFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Cart items retrived succefully',
    data,
  });
});

export { addToCart, getCartItems };
