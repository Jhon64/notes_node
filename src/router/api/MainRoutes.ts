import {PersonaRouter} from "./Persona.router"
import {Request,Response} from "express";

export  class MainRoutes {
    private personaRouter:PersonaRouter
    constructor() {
        this.personaRouter=new PersonaRouter()
    }
    load(){
    }
}
