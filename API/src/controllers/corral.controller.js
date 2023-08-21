import { getConnection, sql, queriesCorral } from "../datebase";

//OBTENCION TODOS LOS DATOS TABLA RECINTO
export const getCorrales = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queriesCorral.getAllCorrales)
        console.log(result);
        res.json(result.recordset)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
};