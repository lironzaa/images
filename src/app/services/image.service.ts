import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList(): void {
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails): void {
    this.imageDetailList.push(imageDetails);
  }
}