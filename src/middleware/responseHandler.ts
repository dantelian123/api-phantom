// src/middleware/responseHandler.ts
import { Request, Response, NextFunction } from 'express';

// Para respuestas exitosas
export const successResponse = (res: Response, data: any, code: number = 200) => {
  res.status(code).json({
    code,
    success: true,
    message: 'Solicitud exitosa',
    data
  });
};

export const errorResponse = (res: Response, message: any, code: number = 500, errorData: any = []) => {
  res.status(code).json({
    code,
    success: false,
    message,
    errorData
  });
};