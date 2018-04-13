import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  /**
   * Create a new user with email and password
   * @param email 
   * @param password 
   */
  public signup(email: string, password: string): Promise<any>{
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Uses Google to authenticate
   */
  public signInWithGoogle(): any {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
