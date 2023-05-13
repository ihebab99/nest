/* eslint-disable prettier/prettier */
import { DataSource, Repository } from 'typeorm';
import { Adress } from '../entities/Adress';
import { Injectable } from "@nestjs/common";
import { AdressTypes } from "../enums/AdressTypes";

@Injectable()
export class AdressRpository extends Repository <Adress>{
  constructor(private datasource: DataSource){
    super(Adress, datasource.createEntityManager());
  }
  async createAdress(adress: Adress): Promise<Adress> {
    try {
      return this.save(adress);
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

  async paginateAdress(type:AdressTypes){
    try {
      return await this.createQueryBuilder('adress')
        .leftJoinAndSelect('adress.user','user').where('adress.type =:type',{type})
        .getManyAndCount();
    }catch (error){
      throw error;
    }
  }
}