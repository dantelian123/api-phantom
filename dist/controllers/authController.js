"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_validator_1 = require("express-validator");
const responseHandler_1 = require("../middleware/responseHandler");
dotenv_1.default.config();
const users = [
    { id: 1, username: 'admin', password: bcrypt_1.default.hashSync('password', 10) }
];
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        return (0, responseHandler_1.errorResponse)(res, errorMessages, 400, []);
    }
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(yield bcrypt_1.default.compare(password, user.password))) {
        return (0, responseHandler_1.errorResponse)(res, 'Las credenciales de autenticación no son válidas.', 401);
    }
    const token = jsonwebtoken_1.default.sign({ sub: user.id, username: user.username }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '1h'
    });
    return (0, responseHandler_1.successResponse)(res, { token }, 200); // Usar la respuesta exitosa
});
exports.login = login;
