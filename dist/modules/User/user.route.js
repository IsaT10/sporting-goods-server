"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
router.get('/', user_controller_1.getAllUsers);
router.post('/', (0, validateRequest_1.default)(user_validation_1.createUserValidationSchema), user_controller_1.createUser);
router.patch('/:id', user_controller_1.updateUser);
router.get('/:id', user_controller_1.getSingleUser);
exports.default = router;
