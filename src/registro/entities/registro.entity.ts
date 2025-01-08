import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pelicula } from'./pelicula.entity';  // Corregir la ruta

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pelicula, (pelicula) => pelicula.registros)
  pelicula: Pelicula;  // Relación con Película
}
