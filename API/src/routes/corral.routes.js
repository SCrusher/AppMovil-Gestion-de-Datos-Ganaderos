import { Router } from "express";
import { getCorrales } from "../controllers/corral.controller";

const router = Router()

router.get('/corral', getCorrales)

export default router