import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from '@firebase/util';
import { User } from 'firebase/auth';
import { Admin } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userCollection: AngularFirestoreCollection<Admin>;
  admin$!: Observable<Admin[]>;

  isLoggedIn = false;
  
  constructor(private firestore: AngularFirestore) {
    this.userCollection = this.firestore.collection<Admin>('users');
    this.admin$ = this.userCollection.valueChanges();
  }
   getAdmin(){
    return this.admin$;
   }

   //for adding Users
  addUser(user: User) {
    const user_key = this.firestore.createId();
    user.$key = user_key;
    this.userCollection.doc(user_key).set(user);
  }
}
