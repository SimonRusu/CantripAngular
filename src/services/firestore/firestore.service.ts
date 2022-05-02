import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }


  public createRoute(data: {
    routeName: string,
    activites: { activityId: number },
    dateAvailability: { date: string },
    numberOfPeople: number,
    price: number,
    publishDate: string,
    routeId: number,
    startTime: string
  }) {
    return this.firestore.collection('predefinedRoutes').add(data);
  }

  public getRoute(documentId: string) {
    return this.firestore.collection('predefinedRoutes').doc(documentId).snapshotChanges();
  }

  public getRoutes() {
    return this.firestore.collection('predefinedRoutes').snapshotChanges();
  }

}
