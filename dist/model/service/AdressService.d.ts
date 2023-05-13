import { AdressRpository } from "../repository/AdressRpository";
import { Adress } from "../entities/Adress";
export declare class AdressService {
    private adressRepository;
    constructor(adressRepository: AdressRpository);
    createAdress(adress: Adress): Promise<Adress>;
    getAllAdress(): Promise<Array<Adress>>;
}
