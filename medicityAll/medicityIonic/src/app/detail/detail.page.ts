import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../shared/services/medical.service';
import { Medicine } from '../shared/modals/medicine';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  showBox: boolean = false;
  showBox2: boolean = false;
  showBox3: boolean = false;
  showBox4: boolean = false;
  showBox5: boolean = false;
  showBox6: boolean = false;
  showBox7: boolean = false;
  
  code: string;
  medData: Medicine;

  constructor(public medicalService: MedicalService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.code = this.route.snapshot.paramMap.get("code");

    this.medicalService.detail(this.code).subscribe(res => {
      this.medData = res;
    })
  }

}
