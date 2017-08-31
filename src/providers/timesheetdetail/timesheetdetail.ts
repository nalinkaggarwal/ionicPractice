import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { TimeSheet } from '../../models/timesheet.model'
/*
/*
  Generated class for the TimesheetdetailProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TimesheetdetailProvider {

  constructor(private fire: AngularFireAuth, private db: AngularFireDatabase) {

  }

  punchTime(punchTimesheetDetails: TimeSheet) {
    var currenrtUserId = this.fire.auth.currentUser.uid;
    punchTimesheetDetails.UserID = currenrtUserId;
    var refData = this.db.database.ref('/TimeSheetDetail/')
      .orderByChild('UserID')
      .equalTo(currenrtUserId)
      .on("child_added", function (data) {
        console.log(data.key);
      });
    
    console.log(refData);
    //return this.db.list('/TimeSheetDetail/').push(punchTimesheetDetails);
  }

}
