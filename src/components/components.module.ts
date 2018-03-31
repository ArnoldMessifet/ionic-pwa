import { NgModule } from '@angular/core';
import { PlatformChoiceComponent } from './platform-choice/platform-choice';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [PlatformChoiceComponent],
	imports: [IonicModule],
	exports: [PlatformChoiceComponent]
})
export class ComponentsModule {}
