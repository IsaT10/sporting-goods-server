import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  getSingleCategoryFromDB,
} from './category.service';

const createCatgory = catchAsync(async (req: Request, res: Response) => {
  const data = await createCategoryIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category create succefully',
    data,
  });
});

const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const data = await getAllCategoriesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category retrived succefully',
    data,
  });
});

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await getSingleCategoryFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category retrived succefully',
    data,
  });
});

// const updateProduct = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const data = await updateProductIntoDB(id, req.body);

//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Product updated succefully',
//     data,
//   });
// });

export { getSingleCategory, createCatgory, getAllCategory };
