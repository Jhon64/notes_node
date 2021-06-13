import {NextFunction, Request, Response, Router} from "express";

export class PersonaRouter{
    router=Router()


    constructor() {
    }
    getPersonas=this.router.get("/persona",(req:Request,res:Response)=> {
        res.send("get persona")
    })
    postNewPersona=this.router.post("/persona/registrar",(req:Request,res:Response)=>{
        res.send("updated")
    })

}
