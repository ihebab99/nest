import { AdressTypes } from "../enums/AdressTypes";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({name:'adress'})
export class Adress{

  @PrimaryGeneratedColumn()
  id : number;
  @Column()
  @IsNotEmpty({message:"required"})
  street: string;
  @Column()
  @IsNotEmpty({message:"required"})
  city: string;
  @Column()
  @IsNotEmpty({message: "required"})
  country: string;
  @Column()
  @IsNotEmpty({message:"required"})
  postalCode: number;

  @Column({
    type:'enum',
    enum:AdressTypes
  })
  @IsNotEmpty({message:"required"})
  type : AdressTypes;
}