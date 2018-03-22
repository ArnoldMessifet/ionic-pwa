import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagesProvider } from '../../providers/images/images';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  @ViewChild('inputFileCamera') inputFileCamera: ElementRef;
  image: string = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private platform: Platform,
              private alertCtrl: AlertController,
              private camera: Camera,
              private imagesPrv: ImagesProvider) {
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async takePictureCameraPlugin() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      cameraDirection: 1,
    };

    if (this.platform.is('cordova') && this.platform.is('mobile')) {
      try {
        let imageData = await this.camera.getPicture(options);
        this.image = `data:image/jpeg;base64,${imageData}`;
      }
      catch (e) {
        console.error(e);
        alert('Error !');
      }

    } else {
      this.alertCtrl
        .create({
          title: 'Camera plugin is not available',
          buttons: ['OK']
        })
        .present();
    }
  }

  /**
   * Trigger file change event on inputFileCamera DOM element
   */
  takePictureHTML5(): void{
    this.inputFileCamera.nativeElement.click();
  }

  /**
   * get image recorded by camera and set to image attribut
   * @param event
   */
  selectImage(event: any): void {
    console.log('selectImage event', event);
    this.imagesPrv
      .handleSelectImage(event)
      .subscribe((res: string) => {
        this.image = res;
      })

  }
}
