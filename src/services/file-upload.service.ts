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
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private fireAuth: FireAuthService) { }
  
  pushFileToStorage(fileUpload: FileUpload): Observable<string> {
    var subject = new Subject<string>();
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
          subject.next(downloadURL);
          
        });
      })
    ).subscribe();
    return subject.asObservable();
  }



  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }
  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }
  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}