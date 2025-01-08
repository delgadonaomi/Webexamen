import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculaService } from './pelicula.service';
import { PeliculaController } from './pelicula.controller';
import { Pelicula } from './entities/pelicula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pelicula])],
  controllers: [PeliculaController],
  providers: [PeliculaService],
  exports: [PeliculaService],
})
export class PeliculaModule {}
