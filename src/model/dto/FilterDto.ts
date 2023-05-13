/* eslint-disable prettier/prettier */

import { AdressTypes } from "../enums/AdressTypes";
import { IsNotEmpty } from "class-validator";

export class FilterDto {
  @IsNotEmpty()
  page:number;
  @IsNotEmpty()
  rewPerPage:number;
  @IsNotEmpty()
  order: 'asc'|'desc';
  @IsNotEmpty()
  orderBy:string;
  @IsNotEmpty()
  type:AdressTypes;
  @IsNotEmpty()
  search:string;

}