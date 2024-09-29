// src/app.ts
import express, { Request, Response } from 'express';
import authRoutes from './routes/authRoutes';
import patientRoutes from './routes/patientRoutes';
import { authenticateToken } from './middleware/authMiddleware';
import { successResponse, errorResponse } from './middleware/responseHandler';
import { globalErrorHandler } from './middleware/errorHandler';
import 'reflect-metadata'; 

const app = express();

app.use(express.json());

// Rutas públicas
app.use('/', authRoutes);
app.use('/', patientRoutes);

// Ruta de bienvenida
app.get('/', (req: Request, res: Response): void => {
  successResponse(res, { message: "¡Hola! Bienvenido a la API Phantom" });
});

// Ruta protegida con token
app.get('/protected', authenticateToken, (req, res) => {
  if (req.user) {
    return successResponse(res, { message: 'Acceso autorizado', user: req.user });
  } else {
    return errorResponse(res, 'Acceso no autorizado', 403);
  }
});

// Ruta no encontrada (404)
app.use((req: Request, res: Response) => {
  errorResponse(res, 'Ruta no encontrada', 404);
});

// Middleware global para manejo de errores
app.use(globalErrorHandler);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

export default app;