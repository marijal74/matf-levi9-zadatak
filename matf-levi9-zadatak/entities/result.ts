import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
@Entity()
export class Result {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name:string;
    @Column()
    description:string;
    @Column()
    price:number;
}