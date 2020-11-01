import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmacyStockPage } from './pharmacy-stock.page';

describe('PharmacyStockPage', () => {
  let component: PharmacyStockPage;
  let fixture: ComponentFixture<PharmacyStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyStockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmacyStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
