// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { errorResponse } from './responseHandler';

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  if (err.name === 'DatabaseError') {
    return errorResponse(res, 'Error de base de datos o de ejecución.', 500, [err.message]);
  }

  return errorResponse(res, 'Ha ocurrido un error inesperado.', 500, [err.message]);
};