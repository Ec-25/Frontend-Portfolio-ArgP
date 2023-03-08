import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    let file = $event.target.files[0];
    let refer = ref(this.storage, 'images/' + name);

    uploadBytes(refer, file).then(respons => { this.getImage() }).catch(error => console.log(error));
  }

  private getImage() {
    let imageRefs = ref(this.storage, 'images');
    list(imageRefs).then(async response => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
      }
    }).catch(error => console.log(error));
  }
}
