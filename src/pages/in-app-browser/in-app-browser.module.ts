import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InAppBrowserPage } from './in-app-browser';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InAppBrowserPage,
  ],
  imports: [
    IonicPageModule.forChild(InAppBrowserPage),
    ComponentsModule
  ],
})
export class InAppBrowserPageModule {}
