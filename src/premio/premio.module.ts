import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PremioService } from './premio.service';
import { PremioController } from './premio.controller';
import { Premio } from './entities/premio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Premio])],
  controllers: [PremioController],
  providers: [PremioService],
  exports: [PremioService],
})
export class PremioModule {}
