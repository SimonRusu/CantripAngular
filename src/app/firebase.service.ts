import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { CardPredefinedComponent } from "./card-predefined/card-predefined.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { Route, RoutePageComponent } from "./route-page/route-page.component";

/*@Injectable({ providedIn: 'root' })
export class FirebaseService {
    private dbPath = '/routes';
    tutorialsRef: AngularFirestoreCollection<HomePageComponent>;
    constructor(private db: AngularFirestore) {
        this.tutorialsRef = db.collection(this.dbPath);
    }
    getAll(): AngularFirestoreCollection<HomePageComponent> {
        return this.tutorialsRef;
    }
    create(tutorial: CardPredefinedComponent): any {
        return this.tutorialsRef.add({ ...route });
    }
    update(id: string, data: any): Promise<void> {
        return this.tutorialsRef.doc(id).update(data);
    }
    delete(id: string): Promise<void> {
        return this.tutorialsRef.doc(id).delete();
    }
}*/