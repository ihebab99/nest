import { AdressService } from "../service/AdressService";
import { Adress } from "../entities/Adress";
import { CreateAdressDto } from "../dto/CreateAdressDto";
export declare class AdressController {
    private adressService;
    constructor(adressService: AdressService);
    createAdress(adress: CreateAdressDto): Promise<Adress>;
    getAllAdress(): Promise<Array<Adress>>;
}
