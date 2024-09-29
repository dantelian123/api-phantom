import { body } from 'express-validator';

export const patientValidator = [
  body('firstName')
    .isString().withMessage('El primer nombre debe ser una cadena.')
    .notEmpty().withMessage('El primer nombre es requerido.'),
  body('identificationNumber')
    .isString().withMessage('El número de identificación debe ser una cadena.')
    .notEmpty().withMessage('El número de identificación es requerido.'),
  body('identificationCode')
    .isString().withMessage('El código de identificación debe ser una cadena.')
    .notEmpty().withMessage('El código de identificación es requerido.'),
  body('email')
    .isEmail().withMessage('El email debe ser válido.')
    .optional(),
  body('secondName')
    .isString().optional(), // No es obligatorio
  body('lastName')
    .isString().withMessage('El primer apellido debe ser una cadena.')
    .notEmpty().withMessage('El primer apellido es requerido.'),
  body('secondLastName')
    .isString().optional() // No es obligatorio
];