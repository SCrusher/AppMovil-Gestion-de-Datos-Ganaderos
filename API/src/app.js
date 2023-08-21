import express from "express";
import config from "./config";
import cors from "cors";
import marcaRoutes from "./routes/marca.routes"
import lecturaRoutes from "./routes/lecturas.routes"
import recintoRoutes from "./routes/recinto.routes"
import corralRoutes from "./routes/corral.routes"
import morgan from "morgan";

const bodyParser = require('body-parser');

const app = express();

//settings 
app.set('port', config.port);

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(marcaRoutes)
app.use(lecturaRoutes)
app.use(recintoRoutes)
app.use(corralRoutes)

export default app;