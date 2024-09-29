// src/routes/patientRoutes.ts
import { Router } from 'express';
import { createPatient } from '../controllers/patientController';
import { patientValidator } from '../validators/patientValidator';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// Aplica el middleware de autenticación a la ruta
router.post('/agendamiento/pacientes', authenticateToken, patientValidator, createPatient);

export default router;