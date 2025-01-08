import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroService } from './registro.service';
import { RegistroController } from './registro.controller';
import { Registro } from './entities/registro.entity';
import { Pelicula } from '../pelicula/entities/pelicula.entity';
import { Premio } from '../premio/entities/premio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Registro, Pelicula, Premio])],
  controllers: [RegistroController],
  providers: [RegistroService],
  exports: [RegistroService],
})
export class RegistroModule {}
