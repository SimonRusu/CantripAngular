import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageSelectorModalComponent } from '../image-selector-modal/image-selector-modal.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ImageSelectorModalComponent,
       {
        panelClass:"image-selector-dialog-container",
        data: {dialogTitle: "UPLOAD PROFILE IMAGE",
        dialogText: "Your request has been submitted succesfully",
        dialogIcon: "task_alt",
        dialogIconColor: "green"}});
        
  }

}
