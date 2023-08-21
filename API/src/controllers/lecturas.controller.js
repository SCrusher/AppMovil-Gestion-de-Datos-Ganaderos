import { getConnection, sql, queriesLectura } from "../datebase";


//OBTENCION TODOS LOS DATOS TABLA LECTURAS
export const getLecturas = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesLectura.getAllLecturas)
        console.log(result);
        res.json(result.recordset)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

//INSERCION DATOS A TABLA LECTURA
export const addNewLectura = async (req, res) => {
    try {
      const lecturas = req.body;
      if (!Array.isArray(lecturas)) {
        return res.status(400).json({ error: "El cuerpo de la solicitud debe contener un arreglo de lecturas." });
      }
      for (const lectura of lecturas) {
        const { arete, fecha, marca, corral, rup } = lectura;
        console.log("Datos recibidos del frontend:");
        console.log("arete:", arete);
        console.log("fecha:", fecha);
        console.log("marca:", marca);
        console.log("corral:", corral);
        console.log("rup:", rup);
        
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("arete", sql.VarChar(50), arete)
        .input("fecha", sql.Date, fecha)
        .input("marca", sql.Int, marca)
        .input("corral", sql.Int, corral)
        .input("RUP", sql.Int, rup)
        .query(queriesLectura.addNewLectura);
      }
      return res.json({ success: true });
    } catch (error) {
      console.error("Error al insertar nuevas lecturas:", error);
      res.status(500).json({ error: "Error al insertar nuevas lecturas" });
    }
};
//OBTENER LECTURA POR ID
export const getLecturaByID = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool.request()
        .input('id', id)
        .query(queriesLectura.getLecturaByID)

    console.log(result)

    res.send(result.recordset[0])
};

//ELIMINAR LECTURA
export const deleteLectura = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool.request()
        .input('id', id)
        .query(queriesLectura.deleteLectura)

    res.send(result)
};

//CONTABILIZAR LECTURAS TOTALES
export const countTotalLectura = async (req, res) => {
    const pool = await getConnection()
    const result = await pool
        .request()
        .query(queriesLectura.getTotalLecturas)

    res.json(result.recordset[0][''])
};

//ACTUALIZAR DATOS LECTURA
export const updateLecturaByID = async (req, res) => {
    const { arete } = req.body
    const { marca } = req.body
    const { corral } = req.body
    const { rup } = req.body
    const { id } = req.params

    const pool = await getConnection();
    const results = await pool
        .request()
        .input('arete', sql.VarChar(50), arete)
        .input('marca', sql.Int, marca)
        .input('corral', sql.Int, corral)
        .input('rup', sql.Int, rup)
        .input('id', sql.Int, id)
        .query(queriesLectura.updateLecturaByID);

    res.json(results);
};


