import { Component, OnInit, Input } from '@angular/core';
import { Pharmacy } from 'src/app/shared/modals/pharmacy';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {

  showBox: boolean = false;
  @Input() item: Pharmacy = new Pharmacy();

  constructor(private callNumber: CallNumber,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private geolocation: Geolocation,) { }

  ngOnInit() { }

  async map() {
    await this.presentActionSheet();
  }

  call() {
    this.callNumber.callNumber(this.item.telephone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  details() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'פרטים',
      subHeader: 'שעות פתיחה',
      message: '<p>  יום א: 10:00-22:00 <br> יום ב: 10:00-22:00 <br> יום ג: 10:00-22:00 <br> יום ד: 10:00-22:00 <br> יום ה: 10:00-22:00 <br> יום ו: 10:00-12:00 <br> </p>',
      buttons: ['אישור']
    });

    await alert.present();
  }

  async presentActionSheet() {

    let toLat = this.item.lat;
    let toLong = this.item.lng;

    this.geolocation.getCurrentPosition().then(async (resp) => {
      let form = resp.coords.latitude + ',' + resp.coords.longitude;
      let destination = toLat + ',' + toLong;

      //Leaving this empty for now, we will get back to this in the next step
      //1. Declaring an empty array
      let actionLinks = [];

      //2. Populating the empty array

      //2A. Add Google Maps App
      actionLinks.push({
        text: 'Google Maps',
        icon: 'navigate',
        handler: () => {
          window.open("https://www.google.com/maps/dir/?api=1&origin=" + destination + "&destination=" + form)
        }
      })


      //2B. Add Waze App
      actionLinks.push({
        text: 'Waze',
        icon: 'navigate',
        handler: () => {
          window.open("https://waze.com/ul?ll=" + destination + "&navigate=yes&z=10&from=" + form);
        }
      });

      //2C. Add a cancel button, you know, just to close down the action sheet controller if the user can't make up his/her mind
      actionLinks.push({
        text: 'ביטול',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
        }
      })

      const actionSheet = await this.actionSheetController.create({
        header: 'ניווט ליד',
        buttons: actionLinks
      });
      await actionSheet.present();
    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }


}
