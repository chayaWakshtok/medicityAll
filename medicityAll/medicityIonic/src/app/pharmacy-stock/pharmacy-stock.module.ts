import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmacyStockPageRoutingModule } from './pharmacy-stock-routing.module';

import { PharmacyStockPage } from './pharmacy-stock.page';
import { StockComponent } from './stock/stock.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmacyStockPageRoutingModule
  ],
  declarations: [PharmacyStockPage,StockComponent]
})
export class PharmacyStockPageModule {}
