"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const responseHandler_1 = require("./responseHandler");
const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);
    if (err.name === 'DatabaseError') {
        return (0, responseHandler_1.errorResponse)(res, 'Error de base de datos o de ejecución.', 500, [err.message]);
    }
    return (0, responseHandler_1.errorResponse)(res, 'Ha ocurrido un error inesperado.', 500, [err.message]);
};
exports.globalErrorHandler = globalErrorHandler;
