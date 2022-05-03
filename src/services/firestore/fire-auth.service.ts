import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  userData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  async singUp(email: string, password: string) {

    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(resp => {
      console.log("User succesfully signed up");

    })
      .catch(error => {
        console.log("Something went wrong in register: ", error.message);

      })

  }

  async singIn(email: string, password: string): Promise<boolean> {
    let succesfully !: boolean;
    await this.angularFireAuth.signInWithEmailAndPassword(email, password).then(() => {
      console.log("User succesfully login");
      succesfully = true;
    })
      .catch((error) => {
        console.log("Something went wrong in login: ", error.message);
        succesfully = false;
      })
    return succesfully;
  }

  SignOut() {
    this.angularFireAuth.signOut();
  }

  async checkEmailExists(email: string): Promise<boolean> {
    let exists !: boolean;
    await this.angularFireAuth.fetchSignInMethodsForEmail(email).then(user => {
      if (user.length > 0) {
        console.log("User exists");
        exists = true;
      } else {
        console.log("User doesn't exist");
        exists = false;
      }
    })
    return exists;
  }

  checkLoggedIn(): boolean {
    let logged !: boolean;
    this.angularFireAuth.onAuthStateChanged(function (user) {
      if (user) {
        logged = true;
      } else {
        logged = false;
      }
    })
    return logged;
  }

}
