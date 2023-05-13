import { AdressTypes } from "../enums/AdressTypes";
export declare class CreateAdressDto {
    id: number;
    street: string;
    city: string;
    country: string;
    postalCode: number;
    type: AdressTypes;
}
