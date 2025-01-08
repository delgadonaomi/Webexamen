import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { PremioService } from './premio.service';
import { CreatePremioDto } from './dto/create-premio.dto';
import { UpdatePremioDto } from './dto/update-premio.dto';

@Controller('premio')
export class PremioController {
  constructor(private readonly premioService: PremioService) {}

  @Post()
  create(@Body() createPremioDto: CreatePremioDto) {
    return this.premioService.create(createPremioDto);
  }

  @Get()
  findAll() {
    return this.premioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.premioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePremioDto: UpdatePremioDto) {
    return this.premioService.update(id, updatePremioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.premioService.remove(id);
  }
}
