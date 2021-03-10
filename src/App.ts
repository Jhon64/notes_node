import express, { Application, json } from "express"
import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser"
import inicioRouter from "./router/inicio.router"
import swaggerUi from 'swagger-ui-express'

import swaggerDocumentJs from "./swagger.json"
export default class App {
    private aplicacion: Application;
    private swaggerDocument: any
    constructor() {
        this.aplicacion = express();
        this.swaggerDocument = swaggerDocumentJs
        this.middlewares()
        this.configuraciones()
        this.rutas()
    }

    middlewares() {
        this.aplicacion.use(morgan("dev"));
        this.aplicacion.use(cors());
        this.aplicacion.use(bodyParser.urlencoded({ extended: true }));
        this.aplicacion.use(bodyParser.json());
    }
    configuraciones() {
        this.aplicacion.set("PORT", process.env.PORT || 3000);
    }
    rutas() {
        this.aplicacion.use("/", inicioRouter)
        this.aplicacion.use("/swagger", swaggerUi.serve, swaggerUi.setup(this.swaggerDocument))
    }
    listenToServer() {
        this.aplicacion.listen(this.aplicacion.get("PORT"), () => {
            console.log(`levantando servidor en http://localhost:${this.aplicacion.get("PORT")}`)
        })
    }
}
