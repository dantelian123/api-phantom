// src/routes/authRoutes.ts
import { Router } from 'express';
import { loginValidator } from '../validators/authValidator';
import { login } from '../controllers/authController';

const router = Router();

router.post('/login', loginValidator, login);

export default router;