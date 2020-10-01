import { Component } from '@angular/core';
import { MedicalService } from '../shared/services/medical.service';
import { Medicine } from '../shared/modals/medicine';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchMedical: string;
  type: number;
  medicines: Medicine[] = [];

  constructor(public medicalService: MedicalService) { }

  search() {
    this.medicalService.searchByName(this.searchMedical).subscribe(res => {
      this.medicines = res.results;
    })
  }

}
