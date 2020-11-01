import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../shared/services/pharmacy.service';
import { Pharmacy } from '../shared/modals/pharmacy';

@Component({
  selector: 'app-pharmacy-stock',
  templateUrl: './pharmacy-stock.page.html',
  styleUrls: ['./pharmacy-stock.page.scss'],
})
export class PharmacyStockPage implements OnInit {

  pharmacies:Pharmacy[]=[];
  constructor(public pharmacyService:PharmacyService) { }

  ngOnInit() {
    this.pharmacies=this.pharmacyService.pharmecyRes;
  }

}
