import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pharmacy } from '../modals/pharmacy';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  url = environment.base_url + "Pharmacy";
  pharmecyRes = [];

  constructor(public http: HttpClient) { }

  getByName(name): Observable<Pharmacy[]> {
    return this.http.get<Pharmacy[]>(this.url + "/GetByName/" + name);
  }

  getByCity(id): Observable<Pharmacy[]> {
    return this.http.get<Pharmacy[]>(this.url + "/GetByCity/" + id);
  }

  getByNear(lat, lng,medicineCode): Observable<Pharmacy[]> {
    return this.http.post<Pharmacy[]>(this.url + "/GetByNear", { lat: lat, lng: lng,medicineCode:medicineCode });
  }
}
