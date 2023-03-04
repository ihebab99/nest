/* eslint-disable prettier/prettier */

import { AdressService } from "../service/AdressService";
import { Adress } from "../entities/Adress";
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('address')
export class AdressController{
  constructor(private adressService:AdressService) {
  }
  @Post()
  async createAdress(@Body()adress:Adress):Promise<Adress>{
    try {
      return this.adressService.createAdress(adress);
    }catch (error){
      throw error;
    }
  }
  @Get('/')
  async getAllAdress():Promise<Array<Adress>>{
    try {
      return this.adressService.getAllAdress();
    }catch (error){
      throw error;
    }
  }
}