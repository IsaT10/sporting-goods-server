"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategoriesFromDB = exports.createCategoryIntoDB = exports.getSingleCategoryFromDB = void 0;
const category_model_1 = require("./category.model");
const createCategoryIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.create(payload);
    return result;
});
exports.createCategoryIntoDB = createCategoryIntoDB;
const getAllCategoriesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.find();
    return result;
});
exports.getAllCategoriesFromDB = getAllCategoriesFromDB;
const getSingleCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.findById(id).populate({
        path: 'products',
        select: 'name',
    });
    return result;
});
exports.getSingleCategoryFromDB = getSingleCategoryFromDB;
