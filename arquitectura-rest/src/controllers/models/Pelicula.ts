export const handlePeliculas = async (req: any) => {
    const method = req.method;
    switch (method) {
      case 'GET':
        return await getPeliculas();
      case 'POST':
        return await createPelicula(req.body);
      default:
        throw new Error('Método no soportado para Películas');
    }
  };
  
  const getPeliculas = async () => {
    // Lógica para obtener películas
    return [{ id: 1, nombre: 'Inception', director: 'Christopher Nolan' }];
  };
  
  const createPelicula = async (data: any) => {
    // Lógica para crear una nueva película
    return { id: 2, nombre: data.nombre, director: data.director };
  };
  