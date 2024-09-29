"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/authRoutes.ts
const express_1 = require("express");
const authValidator_1 = require("../validators/authValidator");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.post('/login', authValidator_1.loginValidator, authController_1.login);
exports.default = router;
