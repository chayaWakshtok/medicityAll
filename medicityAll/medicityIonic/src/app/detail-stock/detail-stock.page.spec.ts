import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailStockPage } from './detail-stock.page';

describe('DetailStockPage', () => {
  let component: DetailStockPage;
  let fixture: ComponentFixture<DetailStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
