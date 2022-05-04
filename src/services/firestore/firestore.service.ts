import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Route } from 'src/app/route-page/route-page.component';
import {
  query,
  collection,
  where,
  documentId,
  getDocs
} from "firebase/firestore";

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

  public getActivitiesById(ids: []){
    return this.firestore.collection('routeActivities', ref => ref.where(documentId(), "in", ids)).valueChanges();
  }

  public getActivity(documentId: string) {
    return this.firestore.collection('routeActivities').doc(documentId).snapshotChanges();
  }

  public getRoutes() {
    return this.firestore.collection('predefinedRoutes')
      .valueChanges({ routeId: 'id' }) as Observable<Route[]>;

  }

  



}
