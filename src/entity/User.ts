import {Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn,JoinColumn} from "typeorm"
import {Person} from "./Person";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUser!: number;
    @Column()
    username!: string
    @Column()
    password!: string
    @UpdateDateColumn()
    updatedAt!: string
    @Column()
    estado!: boolean
    @CreateDateColumn()
    createdAt!: string
    @OneToOne(()=>Person,{onUpdate:"CASCADE",onDelete:"CASCADE"})
    @JoinColumn()
    persona!:Person
}
