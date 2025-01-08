import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pelicula } from './Pelicula';

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pelicula, (pelicula) => pelicula.registros)
  pelicula: Pelicula;
}
