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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleUserFromDB = exports.updateUserIntoDB = exports.getAllUsersFromDB = exports.createUserIntoDB = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const user_model_1 = require("./user.model");
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(payload);
    return result;
});
exports.createUserIntoDB = createUserIntoDB;
const getAllUsersFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchableFields = ['name', 'email'];
    const userQuery = new QueryBuilder_1.default(user_model_1.User.find(), query)
        .search(searchableFields)
        .fields()
        .pagination()
        .sort()
        .filter();
    const result = yield userQuery.queryModel;
    return result;
});
exports.getAllUsersFromDB = getAllUsersFromDB;
const getSingleUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id);
    return result;
});
exports.getSingleUserFromDB = getSingleUserFromDB;
const updateUserIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.updateUserIntoDB = updateUserIntoDB;
