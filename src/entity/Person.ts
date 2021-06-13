import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Person{
    @PrimaryGeneratedColumn()
    idPerson!:number
    @Column()
    nombre!:string
    @Column()
    dni!:string
    @Column({type:"date"})
    fechaNacimiento!:string
    @Column()
    estado!:string

}
