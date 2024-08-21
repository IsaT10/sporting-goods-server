"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const category_validation_1 = require("./category.validation");
const router = (0, express_1.Router)();
router.get('/', category_controller_1.getAllCategory);
router.post('/create-category', (0, validateRequest_1.default)(category_validation_1.createCategoryValidationSchema), category_controller_1.createCatgory);
router.get('/:id', category_controller_1.getSingleCategory);
exports.default = router;
