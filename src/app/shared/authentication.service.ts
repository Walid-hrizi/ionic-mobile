import { Injectable, NgZone } from '@angular/core';

import 'firebase/auth';
import { User } from "../model/auth";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone 
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Login in with email/password
  SignIn(email, password,) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        this.router.navigate(['/acceuil']);
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }
RegistreWithPhoneNumber(){
return this.ngFireAuth.signInWithPhoneNumber("55992233",null)
.then((confirmationResult) => {
  // SMS sent. Prompt user to type the code from the message, then sign the
  // user in with confirmationResult.confirm(code).
  
  // ...
}).catch((error) => {
  // Error; SMS not sent
  // ...
});

}
  // Register user with email/password
  RegisterUser(email, password,userr) {

    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then((user) => {
   
      // Signed in 
      // ...
      this.SetUserData(userr,user.user.uid)
    })

    

    
  }

  // Email verification when new user register
  // SendVerificationMail() {
  //   return this.ngFireAuth.currentUser.sendEmailVerification()
  //   .then(() => {
  //     this.router.navigate(['verify-email']);
  //   })
  // }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // Sign in with Gmail
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // Auth providers
  // AuthLogin(provider) {
  //   return this.ngFireAuth.signInWithPopup(provider)
  //   .then((result) => {
  //      this.ngZone.run(() => {
  //         this.router.navigate(['dashboard']);
  //       })
  //     this.SetUserData(result.user);
  //   }).catch((error) => {
  //     window.alert(error)
  //   })
  // }

  // Store user in localStorage
  SetUserData(userr,id) {
    console.log("from sérvicé",this.ngFireAuth.currentUser)
    
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${id}`);
    const userData: User = {
      email: userr.email,
      fname: userr.fname,
      lname: userr.lname,
      password: userr.password,
    }
    return userRef.set(userData, {
     
    })
  }

  // Sign-out 
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    })
  }

}