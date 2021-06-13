import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Submenu} from "./Submenu";
@Entity()
export class Menu{
    @PrimaryGeneratedColumn()
    idMenu!:number
    @Column()
    nombre!:string
    @Column()
    codigo!:string
    @Column()
    descripcion!:string
    @Column()
    icono!:string
    @Column()
    route!:string
    @Column()
    estado!:boolean
    @CreateDateColumn()
    createdAt!:string
    @UpdateDateColumn()
    updatedAt!:string
    @OneToMany(type => Submenu,Submenu=>Submenu.menu,{onUpdate:"CASCADE",onDelete:"CASCADE"})
    submenus!:[Submenu]
}
