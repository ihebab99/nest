/* eslint-disable prettier/prettier */
import { DataSource, Repository } from 'typeorm';
import { Adress } from '../entities/Adress';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AdressRpository extends Repository <Adress>{
  constructor(private datasource: DataSource){
    super(Adress, datasource.createEntityManager());
  }
  async createAdress(adress: Adress): Promise<Adress> {
    try {
      return this.create(adress);
    }catch (error){
      throw error;
    }
  }

  async getAllAdress():Promise <Array<Adress>>{
    try{
      return this.find();
    }catch (error){
      throw error;
    }
  }
}