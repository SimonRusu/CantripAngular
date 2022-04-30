import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref } from 'firebase/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit {
  storage = getStorage();
  pathReference = ref(this.storage, 'images/stars.jpg');


  // Create a reference from a Google Cloud Storage URI
  gsReference = ref(this.storage, 'gs://cantrip-3c78d.appspot.com/media/maria-image.jpg');

  constructor() { }

  ngOnInit(): void {
  }



}
