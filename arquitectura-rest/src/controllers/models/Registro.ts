export const handleRegistros = async (req: any) => {
    const method = req.method;
    switch (method) {
      case 'GET':
        return await getRegistros();
      case 'POST':
        return await createRegistro(req.body);
      default:
        throw new Error('Método no soportado para Registros');
    }
  };
  
  const getRegistros = async () => {
    // Lógica para obtener registros
    return [{ id: 1, usuario: 'juan', peliculaId: 1, premioId: 1 }];
  };
  
  const createRegistro = async (data: any) => {
    // Lógica para crear un nuevo registro
    return { id: 2, usuario: data.usuario, peliculaId: data.peliculaId, premioId: data.premioId };
  };
  