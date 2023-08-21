import { getConnection, sql, queriesRecinto } from "../datebase";

//OBTENCION TODOS LOS DATOS TABLA RECINTO
export const getRecintos = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesRecinto.getAllRecintos)
        console.log(result);
        res.json(result.recordset)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
};
