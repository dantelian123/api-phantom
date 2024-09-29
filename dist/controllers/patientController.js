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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPatient = void 0;
const express_validator_1 = require("express-validator");
const data_source_1 = require("../data-source");
const Patient_1 = require("../entities/Patient");
const createPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        res.status(400).json({ success: false, message: errorMessages });
        return;
    }
    const { firstName, secondName, lastName, secondLastName, email, identificationCode, identificationNumber, createdBy } = req.body;
    // Aquí, AppDataSource ya es la conexión
    yield data_source_1.AppDataSource.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        const patient = new Patient_1.Patient();
        patient.firstName = firstName;
        patient.secondName = secondName || null;
        patient.lastName = lastName;
        patient.secondLastName = secondLastName || null;
        patient.email = email;
        patient.identificationCode = identificationCode;
        patient.identificationNumber = identificationNumber;
        patient.createdBy = createdBy;
        patient.createdAt = new Date();
        try {
            yield transactionalEntityManager.save(patient);
            res.status(201).json({ success: true, patient });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Error al crear el paciente.' });
        }
    }));
});
exports.createPatient = createPatient;
