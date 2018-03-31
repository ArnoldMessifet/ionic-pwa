import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-native-storage',
  templateUrl: 'native-storage.html',
})
export class NativeStoragePage {
  private form: FormGroup;
  public data: object;
  public plugin = 'Native Storage';
  public iconName = 'archive';
  public isIonicDisplayed = false;
  public isCordovaDisplayed = false;

  constructor(private nativeStorage: NativeStorage,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      data1: [''],
      data2: [''],
      data3: [''],
    });
  }

  setChoice(event: {isIonicSelected: boolean, isCordovaSelected: boolean}): void {
    this.isIonicDisplayed = event.isIonicSelected;
    this.isCordovaDisplayed = event.isCordovaSelected;
  }

  setItemCordova() {
    this.nativeStorage
      .setItem('cordovaData', this.form.value)
      .then(
        () => this.form.reset(),
        error => console.error('Error storing item', error)
      );
  }

  getItemCordova() {
    this.nativeStorage
      .getItem('cordovaData')
      .then(
        data => this.data = data,
        error => console.error(error)
      );
  }

  setItemIonic() {
    const data = JSON.stringify(this.form.value);
    window.localStorage.setItem('ionicData', data);
    this.form.reset();
  }

  getItemIonic(): void {
    const data = window.localStorage.getItem('ionicData');
    this.data = JSON.parse(data);
    this.form.setValue(this.data);
  }
}
