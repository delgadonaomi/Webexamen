import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Registro } from './registro.entity';  // Corregir la ruta

@Entity()
export class Premio {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Registro, (registro) => registro.premio)
  registros: Registro[];  // Relación con Registro
}
