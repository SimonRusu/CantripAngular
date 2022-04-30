import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


@Component({
  selector: 'app-card-about-us',
  templateUrl: './card-about-us.component.html',
  styleUrls: ['./card-about-us.component.css']
})
export class CardAboutUsComponent implements OnInit {

  mariaUrl: Observable<string | null>;
  simonUrl: Observable<string | null>;
  raulUrl: Observable<string | null>;
  downloadURL?: Observable<any>;
  /*storage = getStorage();
  gsReference = ref(this.storage, 'gs://cantrip-3c78d.appspot.com/media/maria-image.jpg');
  httpsReference = ref(this.storage, 'https://firebasestorage.googleapis.com/v0/b/cantrip-angular/o/media/maria-image.jpg');*/

  profileUrl: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {

  }
  ngOnInit() {
    // this code returns the download url of image
    /*this.downloadURL = this.storage.ref("/media/maria - image.jpg").getDownloadURL();*/
  }


}
