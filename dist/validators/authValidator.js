"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
// src/validators/authValidator.ts
const express_validator_1 = require("express-validator");
exports.loginValidator = [
    (0, express_validator_1.body)('username')
        .isString().withMessage('El nombre de usuario debe ser una cadena.')
        .notEmpty().withMessage('El nombre de usuario es requerido.'),
    (0, express_validator_1.body)('password')
        .isString().withMessage('La contraseña debe ser una cadena.')
        .notEmpty().withMessage('La contraseña es requerida.'),
];
