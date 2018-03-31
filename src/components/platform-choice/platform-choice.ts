import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertController, Platform } from 'ionic-angular';

@Component({
  selector: 'platform-choice',
  templateUrl: 'platform-choice.html'
})
export class PlatformChoiceComponent {
  @Input() cordovaPlugin: string;
  @Input() iconName: string;
  @Output() selected = new EventEmitter();

  constructor(private platform: Platform,
              private alertCtrl: AlertController) {
  }

  selectIonicFeactures(): void {
    this.selected.emit({
      isCordovaSelected: false,
      isIonicSelected: true,
    });
  }

  selectCordovaFeatures(): void {
    if (this.platform.is('cordova') && this.platform.is('mobile')) {
      this.selected.emit({
        isCordovaSelected: true,
        isIonicSelected: false,
      });
    } else {
      this.alertCtrl
        .create({
          title: `${this.cordovaPlugin} plugin is not available on this device`,
          buttons: ['OK']
        })
        .present();
    }
  }
}
