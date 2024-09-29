// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { validationResult } from 'express-validator';
import { successResponse, errorResponse } from '../middleware/responseHandler';

dotenv.config();

const users = [
  { id: 1, username: 'admin', password: bcrypt.hashSync('password', 10) }
];

export const login = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg); 
    return errorResponse(res, errorMessages, 400, []);
  }

  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !await bcrypt.compare(password, user.password)) {
    return errorResponse(res, 'Las credenciales de autenticación no son válidas.', 401);
  }

  const token = jwt.sign({ sub: user.id, username: user.username }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '1h'
  });

  return successResponse(res, { token }, 200); // Usar la respuesta exitosa
};