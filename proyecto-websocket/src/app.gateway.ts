import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Pelicula } from './entities/Pelicula';
import { Registro } from './entities/registro.entity';
import { Premio } from './entities/premio.entity';

@WebSocketGateway()
export class AppGateway {
  private peliculas: Pelicula[] = [];
  private registros: Registro[] = [];
  private premios: Premio[] = [];

  // CRUD para Película
  @SubscribeMessage('createPelicula')
  createPelicula(@MessageBody() pelicula: Pelicula): string {
    this.peliculas.push(pelicula);
    return 'Película creada con éxito';
  }

  @SubscribeMessage('getPeliculas')
  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  @SubscribeMessage('updatePelicula')
  updatePelicula(@MessageBody() pelicula: Pelicula): string {
    const index = this.peliculas.findIndex(p => p.id === pelicula.id);
    if (index !== -1) {
      this.peliculas[index] = pelicula;
      return 'Película actualizada con éxito';
    }
    return 'Película no encontrada';
  }

  @SubscribeMessage('deletePelicula')
  deletePelicula(@MessageBody() id: number): string {
    const index = this.peliculas.findIndex(p => p.id === id);
    if (index !== -1) {
      this.peliculas.splice(index, 1);
      return 'Película eliminada con éxito';
    }
    return 'Película no encontrada';
  }

  // CRUD para Registro
  @SubscribeMessage('createRegistro')
  createRegistro(@MessageBody() registro: Registro): string {
    this.registros.push(registro);
    return 'Registro creado con éxito';
  }

  @SubscribeMessage('getRegistros')
  getRegistros(): Registro[] {
    return this.registros;
  }

  @SubscribeMessage('updateRegistro')
  updateRegistro(@MessageBody() registro: Registro): string {
    const index = this.registros.findIndex(r => r.id === registro.id);
    if (index !== -1) {
      this.registros[index] = registro;
      return 'Registro actualizado con éxito';
    }
    return 'Registro no encontrado';
  }

  @SubscribeMessage('deleteRegistro')
  deleteRegistro(@MessageBody() id: number): string {
    const index = this.registros.findIndex(r => r.id === id);
    if (index !== -1) {
      this.registros.splice(index, 1);
      return 'Registro eliminado con éxito';
    }
    return 'Registro no encontrado';
  }

  // CRUD para Premio
  @SubscribeMessage('createPremio')
  createPremio(@MessageBody() premio: Premio): string {
    this.premios.push(premio);
    return 'Premio creado con éxito';
  }

  @SubscribeMessage('getPremios')
  getPremios(): Premio[] {
    return this.premios;
  }

  @SubscribeMessage('updatePremio')
  updatePremio(@MessageBody() premio: Premio): string {
    const index = this.premios.findIndex(p => p.id === premio.id);
    if (index !== -1) {
      this.premios[index] = premio;
      return 'Premio actualizado con éxito';
    }
    return 'Premio no encontrado';
  }

  @SubscribeMessage('deletePremio')
  deletePremio(@MessageBody() id: number): string {
    const index = this.premios.findIndex(p => p.id === id);
    if (index !== -1) {
      this.premios.splice(index, 1);
      return 'Premio eliminado con éxito';
    }
    return 'Premio no encontrado';
  }
}
