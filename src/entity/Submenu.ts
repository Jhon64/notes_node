import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Menu} from "./Menu";

@Entity()
export class Submenu {
    @PrimaryGeneratedColumn()
    idSubmenu!: number
    @Column()
    codigo!: string
    @Column()
    icono!: string
    @Column()
    nombre!: string
    @Column()
    descripcion!: string
    @UpdateDateColumn()
    updatedAt!: string
    
    @CreateDateColumn()
    createdAt!: string
    @Column()
    route!: String
    @Column()
    estado!: boolean
    @OneToMany(Type=> Menu,Menu=>Menu.submenus,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    menu!:Menu
}
