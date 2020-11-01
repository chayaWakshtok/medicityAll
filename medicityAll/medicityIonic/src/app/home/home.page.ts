import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../shared/services/medical.service';
import { Medicine } from '../shared/modals/medicine';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CityService } from '../shared/services/city.service';
import { City } from '../shared/modals/city';
import { PharmacyService } from '../shared/services/pharmacy.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pharmacyName: string;
  cities: City[] = [];
  searchMedical: string;
  type: number;
  medicines: Medicine[] = [];
  typeSearch: number = 1;
  isChooseMedical: boolean = false;
  chooseCity: number;
  pageIndex = 1;
  lat: number;
  lng: number;

  constructor(public medicalService: MedicalService,
    public router: Router,
    private geolocation: Geolocation,
    private cityService: CityService,
    public pharmicyService: PharmacyService) { }

  ngOnInit(): void {
    this.medicines = [];
  }

  search(event) {
    this.medicalService.searchByName(this.searchMedical, this.pageIndex).subscribe(res => {
      for (let i = 0; i < res.results.length; i++) {
        this.medicines.push(res.results[i]);
      }
      if (event)
        event.target.complete();

      if (res.results.length == 0) {
        event.target.disabled = true;
      }
      // if (isFirstLoad)
      //   event.target.complete();
    })
  }

  detail(code, event: Event) {
    event.stopPropagation();
    this.router.navigate(["detail", code]);
  }

  choose(medical, event) {
    this.medicines = [];
    this.medicines.push(medical);
    this.isChooseMedical = true;
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  changeSearch() {
    if (this.typeSearch == 2) {
      this.cityService.getCities().subscribe(res => {
        this.cities = res;
      })
    }
    // if (this.typeSearch == 1) {
    //   this.geolocation.getCurrentPosition().then((resp) => {
    //     debugger;
    //     // resp.coords.latitude
    //     // resp.coords.longitude
    //   }).catch((error) => {
    //     console.log('Error getting location', error);
    //   });
    // }
  }

  getPharByCity() {
    this.pharmicyService.getByCity(this.chooseCity).subscribe(res => {
      this.pharmicyService.pharmecyRes = res;
      this.router.navigate(["pharmacy-stock", this.medicines[0].dragRegNum]);
    })
  }

  getPharByNear() {
    this.pharmicyService.getByNear(this.lat, this.lng, this.medicines[0].dragRegNum).subscribe(res => {
      this.pharmicyService.pharmecyRes = res;
      this.router.navigate(["pharmacy-stock", this.medicines[0].dragRegNum]);
    })
  }

  getPharByName() {
    this.pharmicyService.getByName(this.pharmacyName).subscribe(res => {
      this.pharmicyService.pharmecyRes = res;
      this.router.navigate(["pharmacy-stock", this.medicines[0].dragRegNum]);
    })
  }

  check() {
    if (this.typeSearch == 3)
      this.getPharByName();
    else if (this.typeSearch == 2)
      this.getPharByCity();
    else this.getPharByNear();
  }

  doInfinite(event) {
    this.pageIndex++;
    this.search(event);
  }
  // segmentChanged(ev: any) {
  //   console.log('Segment changed', ev);
  //   this.typeSearch=ev;
  // }

}
