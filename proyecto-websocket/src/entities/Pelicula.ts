import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Registro } from './registro.entity';


@Entity()
export class Pelicula {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Registro, (registro) => registro.pelicula)
  registros: Registro[]; 
}
