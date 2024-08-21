"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidationSchema = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ required_error: 'Name is required' })
            .regex(/^[A-Z][a-z]*$/, 'First name must start with a capital letter followed by lowercase letters.'),
        email: zod_1.z
            .string({ required_error: 'Email is required' })
            .email('Provide a valid email.'),
        password: zod_1.z
            .string({ required_error: 'Password is required' })
            .min(8, 'Password can not be less than 8 character'),
        role: zod_1.z.string({ required_error: 'Role is required' }),
    }),
});
exports.createUserValidationSchema = createUserValidationSchema;
