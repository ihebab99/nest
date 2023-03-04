/* eslint-disable prettier/prettier */

import { AdressRpository } from "../repository/AdressRpository";
import { Adress } from "../entities/Adress";
import { Injectable } from "@nestjs/common";
@Injectable()
export class AdressService{
  constructor(private adressRepository:AdressRpository) {
  }

  async createAdress(adress:Adress):Promise<Adress>{
    try {
      return this.adressRepository.create(adress);
    }catch (error){
      throw error;
    }
  }

  async getAllAdress():Promise<Array<Adress>>{
    try {
      return this.adressRepository.getAllAdress();
    }catch (error){
      throw error;
    }
  }

}