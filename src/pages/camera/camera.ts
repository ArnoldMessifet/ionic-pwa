import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagesProvider } from '../../providers/images/images';

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  @ViewChild('inputFileCamera') inputFileCamera: ElementRef;
  public iconName = 'camera';
  public plugin = 'Camera';
  public image: string = null;

  constructor (private camera: Camera,
               private imagesPrv: ImagesProvider) {
  }

  setChoice (event: { isIonicSelected: boolean, isCordovaSelected: boolean }): void {
    if (event.isIonicSelected) {
      this.takePictureHTML5();
    } else {
      this.takePictureCameraPlugin();
    }
  }

  /**
   * Get picture with Cordova camera plugin
   * @returns {Promise<void>}
   */
  async takePictureCameraPlugin (): Promise<void> {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      cameraDirection: 0,
    };

    try {
      let imageData = await this.camera.getPicture(options);
      this.image = `data:image/jpeg;base64,${imageData}`;
    }
    catch (e) {
      console.error(e);
      alert('Error !');
    }
  }

  /**
   * Trigger file change event on inputFileCamera DOM element
   */
  takePictureHTML5 (): void {
    this.inputFileCamera.nativeElement.click();
  }

  /**
   * get image recorded by camera and set to image attribut
   * @param event
   */
  selectImage (event: any): void {
    console.log('selectImage event', event);
    this.imagesPrv
      .handleSelectImage(event)
      .subscribe((res: string) => {
        this.image = res;
      })

  }
}
