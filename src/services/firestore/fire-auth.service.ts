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
    })
      .catch(error => {
        console.log("Something went wrong in register: ", error.message);

      })

  }



  async singIn(email: string, password: string): Promise<boolean> {
    let succesfully !: boolean;
    await this.angularFireAuth.signInWithEmailAndPassword(email, password).then(() => {
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
        exists = true;
      } else {
        exists = false;
      }
    })
    return exists;
  }

  checkLoggedIn(): any {
    let logged !: boolean;
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        console.log('here is your user data');
        localStorage.setItem('user', JSON.stringify(userResponse));

        console.log(userResponse);
        return true;
      } else {
        localStorage.setItem('user', "false");
        return false;
      }
    });
  }

}
