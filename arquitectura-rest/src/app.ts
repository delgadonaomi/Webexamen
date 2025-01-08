import express, { Request, Response } from 'express';
import { mainController } from './src/controllers/mainController';

const app = express();
app.use(express.json());

// Usar el controlador único para manejar todas las solicitudes
app.all('/api/*', mainController);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
