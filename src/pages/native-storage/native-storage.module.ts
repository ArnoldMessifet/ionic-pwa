import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeStoragePage } from './native-storage';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NativeStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(NativeStoragePage),
    ComponentsModule
  ],
})
export class NativeStoragePageModule {}
