// src/entities/Patient.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IdentificationType } from './IdentificationType';

@Entity('MGM_PACIENTES')
export class Patient {
  @PrimaryGeneratedColumn({ name: 'id_paciente' })
  id: number;

  @Column({ name: 'codigo_tipo_identificacion' })
  identificationCode: string;

  @Column({ name: 'numero_identificacion' })
  identificationNumber: string;

  @Column({ name: 'primer_nombre' })
  firstName: string;

  @Column({ name: 'segundo_nombre', nullable: true })
  secondName: string;

  @Column({ name: 'primer_apellido' })
  lastName: string;

  @Column({ name: 'segundo_apellido', nullable: true })
  secondLastName: string;

  @Column({ name: 'nombre_completo' })
  fullName: string;

  @Column()
  email: string;

  @Column({ name: 'ruta_foto', nullable: true })
  photoPath: string;

  @Column()
  state: string;

  @CreateDateColumn({ name: 'fecha_ingreso' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  updatedAt: Date;

  @Column({ name: 'usuario_ingreso' })
  createdBy: string;

  @Column({ name: 'usuario_modificacion', nullable: true })
  modifiedBy: string;

  @ManyToOne(() => IdentificationType)
  @JoinColumn({ name: 'codigo_tipo_identificacion', referencedColumnName: 'codigo' })
  identificationType: IdentificationType;
}