import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImagesProvider {
  private reader: any = new FileReader();

  constructor() {}

  handleSelectImage(event: any): Observable<any> {
    return Observable.create(observer => {
      // fetch file from event
      const file: any = event.target.files[0];
      // read file as Base64 stream
      this.reader.readAsDataURL(file);
      // send result when file is loaded
      this.reader.onload = (event) => {
        console.log('event', event);
        observer.next(this.reader.result);
        observer.complete();
      };
      // manage error state
      this.reader.onerror = (event) => {
        console.log('error', event);
        observer.error(this.reader.error);
      }
    })
  }
}
