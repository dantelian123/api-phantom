// src/validators/authValidator.ts
import { body } from 'express-validator';

export const loginValidator = [
  body('username')
    .isString().withMessage('El nombre de usuario debe ser una cadena.')
    .notEmpty().withMessage('El nombre de usuario es requerido.'),
  body('password')
    .isString().withMessage('La contraseña debe ser una cadena.')
    .notEmpty().withMessage('La contraseña es requerida.'),
];