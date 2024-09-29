"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
// src/entities/Patient.ts
const typeorm_1 = require("typeorm");
const IdentificationType_1 = require("./IdentificationType");
let Patient = class Patient {
};
exports.Patient = Patient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_paciente' }),
    __metadata("design:type", Number)
], Patient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'codigo_tipo_identificacion' }),
    __metadata("design:type", String)
], Patient.prototype, "identificationCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_identificacion' }),
    __metadata("design:type", String)
], Patient.prototype, "identificationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'primer_nombre' }),
    __metadata("design:type", String)
], Patient.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'segundo_nombre', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "secondName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'primer_apellido' }),
    __metadata("design:type", String)
], Patient.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'segundo_apellido', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "secondLastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_completo' }),
    __metadata("design:type", String)
], Patient.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ruta_foto', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "photoPath", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_ingreso' }),
    __metadata("design:type", Date)
], Patient.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Patient.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_ingreso' }),
    __metadata("design:type", String)
], Patient.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_modificacion', nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "modifiedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => IdentificationType_1.IdentificationType),
    (0, typeorm_1.JoinColumn)({ name: 'codigo_tipo_identificacion', referencedColumnName: 'codigo' }),
    __metadata("design:type", IdentificationType_1.IdentificationType)
], Patient.prototype, "identificationType", void 0);
exports.Patient = Patient = __decorate([
    (0, typeorm_1.Entity)('MGM_PACIENTES')
], Patient);
