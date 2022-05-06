import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FireAuthService } from 'src/services/firestore/fire-auth.service';
import { ImageSelectorModalComponent } from '../image-selector-modal/image-selector-modal.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileImage :string;
  constructor(public dialog: MatDialog, public fireAuth: FireAuthService) { 
    
  }

  ngOnInit(): void {
    this.getUserImage();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ImageSelectorModalComponent,
      {
        panelClass:"image-selector-dialog-container",
      });
        
  }

  getUserImage(): void{
    this.fireAuth.getCurrentUser().subscribe( user =>{
      console.log(user);
    })
  }

}
