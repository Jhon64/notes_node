import {Menu} from "./entity/Menu"
import {Submenu} from "./entity/Submenu"
import {Person} from "./entity/Person"
import {User} from "./entity/User"
import {Note} from "./entity/Notas"
import {createConnection} from "typeorm";

export default createConnection({
    name: "default",
    host: "DESKTOP-0PG50IT\\SQLEXPRESS",
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
    options: {enableArithAbort: false},
    entities: [
    //    Submenu,
       // Menu,
       // Note
    ]
})
