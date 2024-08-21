import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);

  return result;
};

const getAllCategoriesFromDB = async () => {
  const result = await Category.find();

  return result;
};

const getSingleCategoryFromDB = async (id: string) => {
  const result = await Category.findById(id).populate({
    path: 'products',
    select: 'name',
  });

  return result;
};

// const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
//   const result = await Product.findByIdAndUpdate(id, payload, { new: true });

//   return result;
// };

export {
  getSingleCategoryFromDB,
  createCategoryIntoDB,
  getAllCategoriesFromDB,
};
