import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DevicePage } from '../pages/device/device';
import { CameraPage } from '../pages/camera/camera';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: string = 'HomePage';
  featurePages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();

    this.featurePages = [
      { title: 'Device', icon: 'phone-portrait', component: 'DevicePage' },
      { title: 'Camera', icon: 'camera', component: 'CameraPage' },
    ];
  }

  /**
   * initialize the application...
   */
  initializeApp() {
    this.platform.ready().then((readySource) => {
      if (readySource === 'mobile') {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }

  /**
   * navigate to the page
   * @param page
   */
  openPage(page) {
    this.nav.push(page.component);
  }
}

