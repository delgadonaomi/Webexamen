import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post()
  create(@Body() createRegistroDto: CreateRegistroDto) {
    return this.registroService.create(createRegistroDto);
  }

  @Get()
  findAll() {
    return this.registroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.registroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRegistroDto: UpdateRegistroDto) {
    return this.registroService.update(id, updateRegistroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.registroService.remove(id);
  }
}
