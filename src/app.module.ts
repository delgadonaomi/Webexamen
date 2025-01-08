import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculaModule } from './pelicula/pelicula.module';
import { PremioModule } from './premio/premio.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PeliculaModule,
    PremioModule,
    RegistroModule,
  ],
})
export class AppModule {}
