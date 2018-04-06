import { Component } from '@angular/core';
import { IonicPage  } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the InAppBrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-in-app-browser',
  templateUrl: 'in-app-browser.html',
})
export class InAppBrowserPage {
  public plugin = 'In App Browser';
  public iconName = 'archive';
  private url = 'https://ionicframework.com';

  constructor(private iab: InAppBrowser) {
  }

  setChoice(event: {isIonicSelected: boolean, isCordovaSelected: boolean}): void {
    if (event.isIonicSelected) {
      this.openBrowserIonic();
    } else {
      this.openBrowserCordova();
    }
  }

  openBrowserIonic() {
    window.open(this.url, '_blank');
  }

  openBrowserCordova() {
    const inAppBrowserOptions: InAppBrowserOptions = {
      location: 'yes',
      footer: 'yes',
      hardwareback: 'yes'
    };

    this.iab.create(this.url, '_blank', inAppBrowserOptions);
  }
}
