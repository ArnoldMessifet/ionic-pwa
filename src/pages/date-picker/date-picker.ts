import { Component, ViewChild } from '@angular/core';
import { AlertController, DateTime, IonicPage } from 'ionic-angular';

/**
 * Generated class for the DatePickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-date-picker',
  templateUrl: 'date-picker.html',
})
export class DatePickerPage {
  @ViewChild('inputDate') inputDate: DateTime;
  public date: Date;
  public isDisabled = true;
  public iconName = 'calendar';
  public plugin = 'Date Picker';

  constructor (private alertCtrl: AlertController) {
  }

  setChoice (event: { isIonicSelected: boolean, isCordovaSelected: boolean }): void {
    if (event.isIonicSelected) {
      this.setDateIonic();
    } else {
      this.setDateCordova();
    }
  }

  disable (): void {
    this.isDisabled = true;
  }

  setDateCordova (): void {
    this.alertCtrl
      .create({
        title: 'This Cordova plugin is not available on browser platform!',
        buttons: ['OK']
      }).present()
  }

  setDateIonic () {

    this.isDisabled = false;
    setTimeout(() => {
      this.inputDate.open();
    }, 300);


  }
}
