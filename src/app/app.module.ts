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
import { ImagesProvider } from '../providers/images/images';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    CameraPageModule,
    DevicePageModule,
    DialogsPageModule
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
    Dialogs
  ]
})
export class AppModule {}
