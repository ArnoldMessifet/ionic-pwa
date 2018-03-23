import { Component } from '@angular/core';
import { AlertController, IonicPage, Platform } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';

@IonicPage()
@Component({
  selector: 'page-dialogs',
  templateUrl: 'dialogs.html',
})
export class DialogsPage {
  isCordovaDisplayed = false;
  isIonicDisplayed = false;

  constructor(private dialogs: Dialogs,
              private platform: Platform,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DialogsPage');
  }

  displayIonicFeactures(): void {
    this.isCordovaDisplayed = false;
    this.isIonicDisplayed = true;
  }

  displayCordovaFeatures(): void {
    if (this.platform.is('cordova') && this.platform.is('mobile')) {
      this.isCordovaDisplayed = true;
      this.isIonicDisplayed = false;
    } else {
      this.alertCtrl
        .create({
          title: 'Dialogs plugin is not available on this device',
          buttons: ['OK']
        })
        .present();
    }

  }

  alertCordova():void {
    this.dialogs.alert('Hello world')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
  }

  confirmCordova():void {
    this.dialogs.confirm('Do you confirm ?')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
  }
  promptCordova():void {
    this.dialogs.prompt('What\'s the weather today ?')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
  }
  beepCordova():void {
    this.dialogs.beep(3);
  }

  alertIonic(): void {
    this.alertCtrl
      .create({
        title: 'Hello world',
        buttons: ['OK']
      })
      .present();
  }



}
