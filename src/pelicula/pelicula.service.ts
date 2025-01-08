import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';

@Injectable()
export class PeliculaService {
  constructor(
    @InjectRepository(Pelicula)
    private peliculaRepository: Repository<Pelicula>,
  ) {}

  create(createPeliculaDto: any) {
    const pelicula = this.peliculaRepository.create(createPeliculaDto);
    return this.peliculaRepository.save(pelicula);
  }

  findAll() {
    return this.peliculaRepository.find();
  }

  findOne(id: number) {
    return this.peliculaRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.peliculaRepository.delete(id);
  }

  update(id: number, updatePeliculaDto: any) {
    return this.peliculaRepository.update(id, updatePeliculaDto);
  }
}
