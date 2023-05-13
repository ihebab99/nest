import { AdressTypes } from "../enums/AdressTypes";
export declare class FilterDto {
    page: number;
    rewPerPage: number;
    order: 'asc' | 'desc';
    orderBy: string;
    type: AdressTypes;
    search: string;
}
