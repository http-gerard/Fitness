import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})

export class IonicAuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) {
  }

  createUser(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  signinUser(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth.signOut()
          .then(() => {
            console.log("Sign out");
            resolve();
          }).catch(() => {
          reject();
        });
      }
    })
  }

  userDetails(): Observable<any> {
    return this.angularFireAuth.user;
  }

}
