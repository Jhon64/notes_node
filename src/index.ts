import App from "./App";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import driver from 'mssql/msnodesqlv8'

async function init() {

    try {
        const connection: Connection = await createConnection({
            name: "default",
            host: "localhost",
            username: "sa",
            password: "123",
            database: "notesDB",
            type: "mssql",
            logging: true,
            synchronize: true,
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            },
            entities: ["src/entity/**/*.ts"]

        });
        new App().listenToServer()
    } catch (e) {
        console.log({ e, message: "no se pudo conectar a la base de datos" })
    }

}
init()
