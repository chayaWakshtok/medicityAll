import { City } from './city';

export class Pharmacy{
    id:number;
    name:string;
    telephone:string;
    cityId:number;
    description:string;
    address:string;
    numHouse:number;
    lng:number;
    lat:number;
    imageUrl:string;
    star:number;
    stockPharmacies:StockPharmacy[]=[];
    // public  List<BusinessHourDto> BusinessHours { get; set; }
    city:City;
}

export class StockPharmacy{
    id:number;
    idPharmacy:number;
    idMedical:string;
    quentity:number;
    price:number;
}