// src/entities/IdentificationType.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('daf_tipos_identificacion')
export class IdentificationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  description: string;
}