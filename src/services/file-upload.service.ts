import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../models/fileUpload';
import { FireAuthService } from './firestore/fire-auth.service';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/users';
  constructor(private storage: AngularFireStorage, private fireAuth: FireAuthService) { }
  
  pushFileToStorage(fileUpload: FileUpload): void {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {

          this.fireAuth.getCurrentUser().subscribe(user => {
            user.updateProfile({
              photoURL: downloadURL,
            })
          })
          
        });
      })
    ).subscribe();
  }
}