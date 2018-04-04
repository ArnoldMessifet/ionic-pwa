import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { Dialogs } from '@ionic-native/dialogs';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { CameraPageModule } from '../pages/camera/camera.module';
import { DevicePageModule } from '../pages/device/device.module';
import { DialogsPageModule } from '../pages/dialogs/dialogs.module';
import { NativeStoragePageModule } from '../pages/native-storage/native-storage.module';
import { ImagesProvider } from '../providers/images/images';
import { NativeStorage } from '@ionic-native/native-storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { InAppBrowserPageModule } from '../pages/in-app-browser/in-app-browser.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    CameraPageModule,
    DevicePageModule,
    DialogsPageModule,
    NativeStoragePageModule,
    InAppBrowserPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagesProvider,
    Camera,
    Device,
    Dialogs,
    NativeStorage,
    InAppBrowser
  ]
})
export class AppModule {}
