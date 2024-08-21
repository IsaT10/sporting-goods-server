import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import {
  createProductIntoDB,
  deleteProductFromDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  placeOrdersInDB,
  updateProductIntoDB,
} from './product.service';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await createProductIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product create succefully',
    data,
  });
});

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const data = await getAllProductsFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product retrived succefully',
    data,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await getSingleProductFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product retrived succefully',
    data,
  });
});

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await updateProductIntoDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product updated succefully',
    data,
  });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await deleteProductFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product deleted succefully',
    data,
  });
});

const placeOrder = catchAsync(async (req: Request, res: Response) => {
  const data = await placeOrdersInDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Place order complete',
    data,
  });
});

export {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  placeOrder,
};
