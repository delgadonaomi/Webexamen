import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Registro } from './registro.entity'; // Corregir la ruta

@Entity()
export class Pelicula {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Registro, (registro) => registro.pelicula)
  // eslint-disable-next-line prettier/prettier
  registros: Registro[];
}
