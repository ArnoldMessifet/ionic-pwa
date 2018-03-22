import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
    PipesModule
  ],
})
export class CameraPageModule {}
