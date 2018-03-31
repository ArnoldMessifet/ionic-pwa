import { Component } from '@angular/core';
import { AlertController, IonicPage } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-dialogs',
  templateUrl: 'dialogs.html',
})
export class DialogsPage {
  public plugin = 'Dialogs';
  public iconName = 'chatboxes';
  public isCordovaDisplayed = false;
  public isIonicDisplayed = false;

  constructor(private dialogs: Dialogs,
              private alertCtrl: AlertController) {
  }

  setChoice(event: {isIonicSelected: boolean, isCordovaSelected: boolean}): void {
    this.isIonicDisplayed = event.isIonicSelected;
    this.isCordovaDisplayed = event.isCordovaSelected;
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

  confirmIonic(): void {
    this.alertCtrl
      .create({
        title: 'Hello world',
        message: 'Do you confirm ?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      })
      .present();
  }

  promptIonic(): void {
    this.alertCtrl
      .create({
        title: 'Hello world',
        inputs: [
          {
            name: 'What\'s the weather today ?',
            placeholder: 'Title'
          },
        ],
        buttons: ['OK']
      })
      .present();
  }
}
