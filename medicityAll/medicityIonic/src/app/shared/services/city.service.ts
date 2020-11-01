import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { City } from '../modals/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  url = environment.base_url + "city";
  constructor(public http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }
}
