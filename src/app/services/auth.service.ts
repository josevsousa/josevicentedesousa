import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

interface User{
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
     afs.firestore.settings({ timestampsInSnapshots: true });
     //Observar o user
     this.user = this.afAuth.authState
      .switchMap(user => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }else{
          return Observable.of(null);
        }
      })
  }


  // LOGIN NO GOOGLE SALVANDO O USUARIO NO FIRESTORE
  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  oAuthLogin(provider){
    return this.afAuth.auth.signInWithPopup(provider)
      .then( (credencial) => {
        //logado
        this.updateUserData(credencial.user);
      } )
      .catch((error)=>{
        console.log(error);
      })
  }
  // envia ao db
  updateUserData(user){
    //set o user data to firestore on login
    const userRef:  AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL                            
    }

    return userRef.set(data);

  }
  logOut(){
    console.log('sair');
    return this.afAuth.auth.signOut();
  }
  //FIM DO LOGIN DO GOOGLE
  
}
