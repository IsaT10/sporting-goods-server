import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../error/appError';
import { TProduct } from './product.interface';
import { Product } from './product.model';

type TPlaceOrder = { id: string; quantity: number };

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);

  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const searchableFields = ['name'];

  // Create a base query with search and filter applied

  const queryBuilder = new QueryBuilder(Product.find(), query)
    .search(searchableFields)
    .filter();

  // Clone the conditions from the query builder for a separate count query
  const countConditions = { ...queryBuilder.queryModel.getQuery() };

  // Create a separate query instance for counting documents
  const totalProduct = await Product.countDocuments(countConditions);

  // Apply fields, sorting, and pagination to the main query builder
  queryBuilder.fields().sort().pagination();
  const products = await queryBuilder.queryModel;

  return { totalProduct, products };
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found!');
  }

  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found!');
  }

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found!');
  }

  return result;
};

const placeOrdersInDB = async (payload: TPlaceOrder[]) => {
  const orderItems = payload; // Expecting an array of objects with id and quantity

  // Iterate through each item and reduce the stock
  const bulkOps = orderItems.map((item) => ({
    updateOne: {
      filter: { _id: item.id }, // Find the product by ID
      update: { $inc: { stock: -item.quantity } }, // Decrease the stock
    },
  }));

  // Perform the bulk operation
  await Product.bulkWrite(bulkOps);
};

export {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  placeOrdersInDB,
};
