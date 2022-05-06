import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { FireAuthService } from 'src/services/firestore/fire-auth.service';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { ImageSelectorModalComponent } from '../image-selector-modal/image-selector-modal.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileData = new Observable<any>();
  predefinedData = new Observable<any>();
  subject = new Subject<any>();
  updatedEmail: string;

  constructor(public dialog: MatDialog, public fireAuth: FireAuthService) { 
  }

  ngOnInit(): void {
    this.profileData = this.fireAuth.getCurrentUser();
  }

  openImageDialog(): void{
    const dialogRef = this.dialog.open(ImageSelectorModalComponent,
      {
        panelClass:"image-selector-dialog-container",
      });
  }

  openSuccessDialog(): void{
    this.dialog.open(AlertModalComponent,
       {data: {dialogTitle: "Your email has been changed",
        dialogText: "you can log in now with "+this.updatedEmail,
        dialogIcon: "task_alt",
        dialogIconColor: "green"}});
  }

  openDismissDialog(error:string): void{
    this.dialog.open(AlertModalComponent,
       {data: {dialogTitle: "The operation could not be satisfied",
        dialogText: error,
        dialogIcon: "cancel",
        dialogIconColor: "red"}});
  }


  editEmail(): void{
    this.fireAuth.getCurrentUser().subscribe(user => {
      user.updateEmail(this.updatedEmail).then(() => {
        this.openSuccessDialog();
      })
      .catch((err:any) =>{
        this.openDismissDialog(err);
      }
       
      )
    })
  }
  
}
