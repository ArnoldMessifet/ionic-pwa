import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DialogsPage } from './dialogs';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DialogsPage,
  ],
  imports: [
    IonicPageModule.forChild(DialogsPage),
    ComponentsModule
  ],
})
export class DialogsPageModule {}
