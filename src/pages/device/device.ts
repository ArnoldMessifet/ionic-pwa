import { Component } from '@angular/core';
import { AlertController, IonicPage, Platform } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
  deviceData: object;

  constructor (private device: Device,
               private platform: Platform,
               private alertCtrl: AlertController) {
    this.getDeviceInfo();
  }

  getDeviceInfo () {
    if (this.platform.is('cordova') && this.platform.is('mobile')) {
      console.log(this.device.cordova);
      this.deviceData = this.device;
    } else {
      this.alertCtrl
        .create({
          title: `Device plugin is not available on this device`,
          buttons: ['OK']
        })
        .present();
    }
  }
}
