// @types/express/index.d.ts
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // O un tipo más específico
    }
  }
}