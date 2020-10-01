import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootMedicine } from '../modals/medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(public http: HttpClient) { }

  searchByName(value): Observable<RootMedicine> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Accept', 'application/json');

    return this.http.post<RootMedicine>("https://esb.gov.il/GovServiceList/IDRServer/SearchByName",
      { "val": value, "prescription": false, "healthServices": false, "pageIndex": 1, "orderBy": 0 }, { headers: headers })
  }
}
