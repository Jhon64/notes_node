import App from "./App";
import "reflect-metadata";
import { Connection } from "typeorm";
import driver from 'mssql/msnodesqlv8'
import configDatabase  from "./configDatabase";
async function init() {

    try {
        const connection: Connection = await configDatabase;
        new App().listenToServer()
    } catch (e) {
        console.log({ e, message: "error en la base de datos" })
    }

}
init()
