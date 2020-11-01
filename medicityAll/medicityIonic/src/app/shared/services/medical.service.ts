import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootMedicine, Medicine } from '../modals/medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(public http: HttpClient) { }

  searchByName(value,pageIndex,healthServices=false): Observable<RootMedicine> {
    let headers = new HttpHeaders();
    //headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Accept', 'application/json');

    return this.http.post<RootMedicine>("https://esb.gov.il/GovServiceList/IDRServer/SearchByName",
      { "val": value, "prescription": false, "healthServices": healthServices, "pageIndex": pageIndex, "orderBy": 0 }, { headers: headers })
  }

  detail(value): Observable<Medicine> {
    let headers = new HttpHeaders();
    //headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Accept', 'application/json');

    return this.http.post<Medicine>("https://esb.gov.il/GovServiceList/IDRServer/GetSpecificDrug",
      { "dragRegNum": value }, { headers: headers })
  }
}
