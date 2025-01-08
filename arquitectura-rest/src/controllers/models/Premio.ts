export const handlePremios = async (req: any) => {
    const method = req.method;
    switch (method) {
      case 'GET':
        return await getPremios();
      case 'POST':
        return await createPremio(req.body);
      default:
        throw new Error('Método no soportado para Premios');
    }
  };
  
  const getPremios = async () => {
    // Lógica para obtener premios
    return [{ id: 1, nombre: 'Oscar', categoria: 'Mejor Película' }];
  };
  
  const createPremio = async (data: any) => {
    // Lógica para crear un nuevo premio
    return { id: 2, nombre: data.nombre, categoria: data.categoria };
  };
  