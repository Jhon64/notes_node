import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ nullable: false })
    titulo!: string

    @Column({ nullable: false })
    decripcion!: string

    @Column({ nullable: false, type: "datetime" })
    fecha!: string

    @CreateDateColumn()
    createdAt!: string

    @UpdateDateColumn()
    updatedAt!: string
}