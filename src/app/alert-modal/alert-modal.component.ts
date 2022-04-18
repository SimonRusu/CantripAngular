import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  public dialogTitle: String;
  public dialogText: String;
  public dialogIcon: String;
  public dialogIconColor: String

  constructor(
    public dialogRef: MatDialogRef<AlertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.dialogTitle = this.data.dialogTitle;
    this.dialogText = this.data.dialogText;
    this.dialogIcon = this.data.dialogIcon;
    this.dialogIconColor = this.data.dialogIconColor;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  

}
