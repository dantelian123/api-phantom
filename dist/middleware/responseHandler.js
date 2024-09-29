"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
// Para respuestas exitosas
const successResponse = (res, data, code = 200) => {
    res.status(code).json({
        code,
        success: true,
        message: 'Solicitud exitosa',
        data
    });
};
exports.successResponse = successResponse;
const errorResponse = (res, message, code = 500, errorData = []) => {
    res.status(code).json({
        code,
        success: false,
        message,
        errorData
    });
};
exports.errorResponse = errorResponse;
