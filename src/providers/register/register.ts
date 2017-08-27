import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegisterProvider {

  constructor(private fire: AngularFireAuth, private db: AngularFireDatabase) {

  }
  register(uname, password) {
    return this.fire.auth.createUserWithEmailAndPassword(uname, password);

  }
  addUserDEtail(name) {
    return this.db.list('/UserDetail/').push({
      name: name,
      userId: this.fire.auth.currentUser.uid
    });
  }
}

export class UserDetail {
  name: string;
  userId: any;
}
