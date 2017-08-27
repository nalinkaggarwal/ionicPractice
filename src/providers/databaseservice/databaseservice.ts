import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseObjectObservable, FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the DatabaseserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseserviceProvider {

  constructor(private _db: AngularFireDatabase) {
  }
  public listTimesheetDetails(): FirebaseListObservable<any[]> {
    return this._db.list('/accounts');
  }
}
