// src/premio/premio.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Premio } from './entities/premio.entity';
import { Registro } from '../registro/entities/registro.entity';  // Verifica la ruta
import { CreateRegistroDto } from '../dto/create-registro.dto';  // Asegúrate de que la ruta sea correcta

@Injectable()
export class PremioService {
  constructor(
    @InjectRepository(Premio)
    private premioRepository: Repository<Premio>,

    @InjectRepository(Registro)
    private registroRepository: Repository<Registro>,
  ) {}

  // Crear un registro
  create(createRegistroDto: CreateRegistroDto) {
    const registro = this.registroRepository.create(createRegistroDto);
    return this.registroRepository.save(registro);
  }

  // Obtener todos los premios
  findAll() {
    return this.premioRepository.find({
      relations: ['registros'], // Asegúrate de cargar las relaciones si las necesitas
    });
  }

  // Obtener un premio por ID
  async findOne(id: number) {
    return this.premioRepository.findOne({
      where: { id },
      relations: ['registros'], // Asegúrate de cargar las relaciones si las necesitas
    });
  }

  // Eliminar un premio por ID
  remove(id: number) {
    return this.premioRepository.delete(id);
  }

  // Actualizar un premio
  update(id: number, updatePremioDto: any) {
    return this.premioRepository.update(id, updatePremioDto);
  }
}
