import express,{Application} from "express"
import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser"

export default class App{
    private aplicacion:Application;
    constructor() {
        this.aplicacion=express();
        this.middlewares()
        this.configuraciones()
    }

    middlewares(){
        morgan("dev");
        cors();
        bodyParser.urlencoded({extended:true});
        bodyParser.json();
    }
     configuraciones(){
        this.aplicacion.set("PORT",process.env.PORT||3000);
     }
     rutas(){}
     listenToServer(){
        this.aplicacion.listen(this.aplicacion.get("PORT"),()=>{
            console.log(`levantando servidor en http://localhost:${this.aplicacion.get("PORT")}`)
        })
     }
}
