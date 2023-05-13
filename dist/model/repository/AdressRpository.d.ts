import { DataSource, Repository } from 'typeorm';
import { Adress } from '../entities/Adress';
import { AdressTypes } from "../enums/AdressTypes";
export declare class AdressRpository extends Repository<Adress> {
    private datasource;
    constructor(datasource: DataSource);
    createAdress(adress: Adress): Promise<Adress>;
    getAllAdress(): Promise<Array<Adress>>;
    paginateAdress(type: AdressTypes): Promise<[Adress[], number]>;
}
