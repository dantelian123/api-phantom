"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/patientRoutes.ts
const express_1 = require("express");
const patientController_1 = require("../controllers/patientController");
const patientValidator_1 = require("../validators/patientValidator");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
// Aplica el middleware de autenticación a la ruta
router.post('/agendamiento/pacientes', authMiddleware_1.authenticateToken, patientValidator_1.patientValidator, patientController_1.createPatient);
exports.default = router;
