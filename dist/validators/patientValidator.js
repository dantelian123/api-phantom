"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientValidator = void 0;
const express_validator_1 = require("express-validator");
exports.patientValidator = [
    (0, express_validator_1.body)('firstName')
        .isString().withMessage('El primer nombre debe ser una cadena.')
        .notEmpty().withMessage('El primer nombre es requerido.'),
    (0, express_validator_1.body)('identificationNumber')
        .isString().withMessage('El número de identificación debe ser una cadena.')
        .notEmpty().withMessage('El número de identificación es requerido.'),
    (0, express_validator_1.body)('identificationCode')
        .isString().withMessage('El código de identificación debe ser una cadena.')
        .notEmpty().withMessage('El código de identificación es requerido.'),
    (0, express_validator_1.body)('email')
        .isEmail().withMessage('El email debe ser válido.')
        .optional(),
    (0, express_validator_1.body)('secondName')
        .isString().optional(), // No es obligatorio
    (0, express_validator_1.body)('lastName')
        .isString().withMessage('El primer apellido debe ser una cadena.')
        .notEmpty().withMessage('El primer apellido es requerido.'),
    (0, express_validator_1.body)('secondLastName')
        .isString().optional() // No es obligatorio
];
