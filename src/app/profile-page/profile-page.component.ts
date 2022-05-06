import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { FireAuthService } from 'src/services/firestore/fire-auth.service';
import { ImageSelectorModalComponent } from '../image-selector-modal/image-selector-modal.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profilePicture : Subject<string>;
  constructor(public dialog: MatDialog, public fireAuth: FireAuthService) { 
  }

  ngOnInit(): void {
    this.getProfilePicture();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ImageSelectorModalComponent,
      {
        panelClass:"image-selector-dialog-container",
      });
  }

  getProfilePicture(): Observable<string>{
    this.fireAuth.getCurrentUser().subscribe( data =>{
      this.profilePicture.next(data.photoURL);
      console.log(data.photoURL);
    })
    this.profilePicture.asObservable().subscribe(aa=>{console.log(aa)});
  
    return this.profilePicture.asObservable();
  }
  
}
