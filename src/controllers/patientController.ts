// src/controllers/patientController.ts
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { AppDataSource } from '../data-source';
import { Patient } from '../entities/Patient';
import { EntityManager } from 'typeorm'; // Importar EntityManager

export const createPatient = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    res.status(400).json({ success: false, message: errorMessages });
    return;
  }

  const {
    firstName,
    secondName,
    lastName,
    secondLastName,
    email,
    identificationCode,
    identificationNumber,
    createdBy
  } = req.body;

  // Aquí, AppDataSource ya es la conexión
  await AppDataSource.transaction(async (transactionalEntityManager: EntityManager) => {
    const patient = new Patient();
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
      await transactionalEntityManager.save(patient);
      res.status(201).json({ success: true, patient });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al crear el paciente.' });
    }
  });
};