import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-selector-modal',
  templateUrl: './image-selector-modal.component.html',
  styleUrls: ['./image-selector-modal.component.css']
})
export class ImageSelectorModalComponent implements OnInit {

  public dialogTitle: String;
  public dialogText: String;
  public dialogIcon: String;
  public dialogIconColor: String

  constructor(
    public dialogRef: MatDialogRef<ImageSelectorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    }

  ngOnInit(): void {
    this.dialogTitle = this.data.dialogTitle;
    this.dialogText = this.data.dialogText;
    this.dialogIcon = this.data.dialogIcon;
    this.dialogIconColor = this.data.dialogIconColor;
    const matDialogConfig = new MatDialogConfig()

    matDialogConfig.position = { top: `160px` }
    this.dialogRef.updatePosition(matDialogConfig.position);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
