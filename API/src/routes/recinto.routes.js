import { Router } from "express";
import { getRecintos } from "../controllers/recinto.controller";

const router = Router()

router.get('/recinto', getRecintos)



export default router