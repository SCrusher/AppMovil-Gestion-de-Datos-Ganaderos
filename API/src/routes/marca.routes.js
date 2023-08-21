import { Router } from "express";
import { addNewMarca, countTotalMarca, deleteMarca, getMarca, getMarcarbyID, updateMarcabyID } from "../controllers/marca.controller";

const router = Router()

router.get('/marca', getMarca)

router.post('/marca', addNewMarca)

router.get('/marca/count', countTotalMarca)

router.get('/marca/:id', getMarcarbyID)

router.delete('/marca/:id', deleteMarca)

router.put('/marca/:id', updateMarcabyID)





export default router