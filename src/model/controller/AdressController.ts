/* eslint-disable prettier/prettier */

import { AdressService } from "../service/AdressService";
import { Adress } from "../entities/Adress";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateAdressDto } from "../dto/CreateAdressDto";

@Controller('address')
export class AdressController{
  constructor(private adressService:AdressService) {
  }
  @Post('/save')
  async createAdress(@Body() adress:CreateAdressDto):Promise<Adress>{
    try {
      return await this.adressService.createAdress(adress);
    }catch (error){
      throw error;
    }
  }
  @Get('/all')
  async getAllAdress():Promise<Array<Adress>>{
    try {
      return this.adressService.getAllAdress();
    }catch (error){
      throw error;
    }
  }
}