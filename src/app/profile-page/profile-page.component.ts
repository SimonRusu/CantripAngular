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

  profileData = new Observable<any>();
  constructor(public dialog: MatDialog, public fireAuth: FireAuthService) { 
  }

  ngOnInit(): void {
    this.profileData = this.fireAuth.getCurrentUser();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ImageSelectorModalComponent,
      {
        panelClass:"image-selector-dialog-container",
      });
  }
  
}
