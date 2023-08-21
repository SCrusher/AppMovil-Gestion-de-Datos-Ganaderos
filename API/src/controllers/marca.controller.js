import { getConnection, sql, queries} from "../datebase";


//OBTENCION TODOS LOS DATOS TABLA MARCA
export const getMarca = async (req, res) => {

    try{
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllMarcas)
        console.log(result);
        res.json(result.recordset)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
};

//INSERCION DATOS A TABLA MARCA
export const addNewMarca = async (req, res)=>{

    const {tipo} = req.body

    if(tipo == null){
        return res.status(400).json({msg: 'Bad Request. Porfavor llena todos los campos'})
    }

    try{
        const pool = await getConnection();
    
        await pool
        .request()
        .input("tipo", sql.VarChar, tipo)
        .query(queries.addNewMarca)
    
        res.json('tipo')
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

export const getMarcarbyID = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection()
    const result = await pool.request()
    .input('id', id)
    .query(queries.getMarcabyID)

    console.log(result)

    res.send(result.recordset[0])
}

export const deleteMarca = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection()
    const result = await pool.request()
    .input('id', id)
    .query(queries.deleteMarca)
    
    res.send(result)
}

export const countTotalMarca = async (req, res) => {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queries.getTotalMarcas)
    
    res.json(result.recordset[0][''])
}

export const updateMarcabyID = async (req, res) =>{
    const { tipo } = req.body;
    const { id } = req.params

    if (tipo == null){
        return res.status(400).json({msg:'Bad Request. Porfavor llena todos los campos'})
    }

    const pool = await getConnection();
    await pool
    .request()
    .input('tipo', sql.VarChar, tipo)
    .input('id', sql.Int, id)
    .query(queries.updateMarcabyID);

    res.json({tipo});
}


