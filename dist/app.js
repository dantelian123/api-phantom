"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const patientRoutes_1 = __importDefault(require("./routes/patientRoutes"));
const authMiddleware_1 = require("./middleware/authMiddleware");
const responseHandler_1 = require("./middleware/responseHandler");
const errorHandler_1 = require("./middleware/errorHandler");
require("reflect-metadata");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Rutas públicas
app.use('/', authRoutes_1.default);
app.use('/', patientRoutes_1.default);
// Ruta de bienvenida
app.get('/', (req, res) => {
    (0, responseHandler_1.successResponse)(res, { message: "¡Hola! Bienvenido a la API Phantom" });
});
// Ruta protegida con token
app.get('/protected', authMiddleware_1.authenticateToken, (req, res) => {
    if (req.user) {
        return (0, responseHandler_1.successResponse)(res, { message: 'Acceso autorizado', user: req.user });
    }
    else {
        return (0, responseHandler_1.errorResponse)(res, 'Acceso no autorizado', 403);
    }
});
// Ruta no encontrada (404)
app.use((req, res) => {
    (0, responseHandler_1.errorResponse)(res, 'Ruta no encontrada', 404);
});
// Middleware global para manejo de errores
app.use(errorHandler_1.globalErrorHandler);
// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
exports.default = app;
