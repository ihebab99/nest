import { AdressTypes } from "../enums/AdressTypes";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({name:'adress'})
export class Adress{

  @PrimaryGeneratedColumn()
  id : number;
  @Column()
  street: string;
  @Column()

  city: string;
  @Column()

  country: string;
  @Column()

  postalCode: number;

  @Column({
    type:'enum',
    enum:AdressTypes
  })

  type : AdressTypes;
}