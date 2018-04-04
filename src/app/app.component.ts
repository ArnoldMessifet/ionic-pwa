import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
      { title: 'Dialogs', icon: 'chatboxes', component: 'DialogsPage' },
      { title: 'Native Storage', icon: 'archive', component: 'NativeStoragePage' },
      { title: 'In App Browser', icon: 'globe', component: 'InAppBrowserPage' },
      { title: 'Date Picker', icon: 'calendar', component: 'DatePickerPage' },
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

