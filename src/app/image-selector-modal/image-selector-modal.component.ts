import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { FileUpload } from 'src/models/fileUpload';
import { FileUploadService } from 'src/services/file-upload.service';

@Component({
  selector: 'app-image-selector-modal',
  templateUrl: './image-selector-modal.component.html',
  styleUrls: ['./image-selector-modal.component.css']
})
export class ImageSelectorModalComponent implements OnInit {
  
  selectedFile: File;
  fileUpload: FileUpload;

  constructor(
    public dialogRef: MatDialogRef<ImageSelectorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private uploadService: FileUploadService) {

    }

  ngOnInit(): void {

    const matDialogConfig = new MatDialogConfig();

    matDialogConfig.position = { top: `160px` }
    this.dialogRef.updatePosition(matDialogConfig.position);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
    $('#selectedFile').text($('#fileInput').text().replace("", this.selectedFile.name));

  }

  onUpload(): void{
    if (this.selectedFile) {
      const file: File | null = this.selectedFile;

      if (file) {
        this.fileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.fileUpload);
        
      }
    }
  }

}