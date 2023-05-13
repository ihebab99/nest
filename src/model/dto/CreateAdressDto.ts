/* eslint-disable prettier/prettier */

import { AdressTypes } from "../enums/AdressTypes";
import { IsEmpty, IsNotEmpty } from "class-validator";

export class CreateAdressDto{
  @IsEmpty({message:"should be empty" , always:true})
  id:number;
  @IsNotEmpty()
  street:string;
  @IsNotEmpty()
  city:string;
  @IsNotEmpty()
  country:string;
  @IsNotEmpty()
  postalCode: number;
  @IsNotEmpty()
  type:AdressTypes;

}