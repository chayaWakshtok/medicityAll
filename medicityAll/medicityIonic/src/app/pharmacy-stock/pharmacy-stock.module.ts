import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmacyStockPageRoutingModule } from './pharmacy-stock-routing.module';

import { PharmacyStockPage } from './pharmacy-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmacyStockPageRoutingModule
  ],
  declarations: [PharmacyStockPage]
})
export class PharmacyStockPageModule {}
