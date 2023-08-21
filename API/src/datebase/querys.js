export const queries = {
    getAllMarcas: 'SELECT * FROM Marca',
    addNewMarca: 'INSERT INTO Marca (tipo) VALUES (@Tipo)',
    getMarcabyID: 'SELECT * FROM Marca WHERE id_Marca = @id',
    deleteMarca: 'DELETE FROM [APPTESIS].[dbo].[Marca] WHERE id_Marca = @id',
    getTotalMarcas: 'SELECT COUNT(*) FROM Marca',
    updateMarcabyID: 'UPDATE Marca SET tipo = @tipo WHERE id_Marca = @id'
}

export const queriesLectura = {
    getAllLecturas: 'SELECT * FROM Lectura',
    addNewLectura: 'INSERT INTO Lectura (Arete, Fecha, id_Marca, id_Corral, RUP) VALUES (@arete, @fecha, @marca, @corral, @rup)',
    getLecturaByID: 'SELECT * FROM Lectura WHERE id = @id',
    deleteLectura: 'DELETE FROM [APPTESIS].[dbo].[Lectura] WHERE id = @id',
    getTotalLecturas: 'SELECT COUNT(*) FROM Lectura',
    updateLecturaByID: 'UPDATE Lectura SET Arete = @arete, id_Marca = @marca, id_Corral = @corral, RUP = @rup WHERE id = @id'
}

export const queriesRecinto = {
    getAllRecintos: 'SELECT * FROM Recinto',
    getRecintoByID: 'SELECT * FROM Recinto WHERE id = @id',
}

export const queriesCorral = {
    getAllCorrales: 'SELECT * FROM Corral',
    getCorralByID: 'SELECT * FROM Corral WHERE id = @id',
}