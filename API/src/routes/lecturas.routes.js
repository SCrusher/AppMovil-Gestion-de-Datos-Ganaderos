import { Router } from "express";
import { addNewLectura, countTotalLectura, deleteLectura, getLecturas, getLecturaByID, updateLecturaByID } from "../controllers/lecturas.controller";

const router = Router()

router.get('/lectura', getLecturas)

router.post('/addlectura', addNewLectura)

router.get('/lectura/count', countTotalLectura)

router.get('/lectura/:id', getLecturaByID)

router.delete('/lectura/:id', deleteLectura)

router.put('/lectura/:id', updateLecturaByID)


export default router