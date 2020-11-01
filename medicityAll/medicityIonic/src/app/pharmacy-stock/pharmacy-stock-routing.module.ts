import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmacyStockPage } from './pharmacy-stock.page';

const routes: Routes = [
  {
    path: '',
    component: PharmacyStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyStockPageRoutingModule {}
