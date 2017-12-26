import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TimeSheet } from '../../models/timesheet.model';
import 'rxjs';
/*
/*
  Generated class for the TimesheetdetailProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TimesheetdetailProvider {
  timesheet: TimeSheet[] = [];
  timesheetList: FirebaseListObservable<any[]>;
  constructor(private fire: AngularFireAuth, private db: AngularFireDatabase) {

  }

  punchTime(punchTimesheetDetails: TimeSheet) {
    var currenrtUserId = this.fire.auth.currentUser.uid;
    //var timeSheetRef = this.db.database.ref(`/TimeSheetDetail/${currenrtUserId}`);
    this.timesheetList = this.db.list(`/TimeSheetDetail/${currenrtUserId}`);
    // timeSheetRef.on('child_added',snapshot =>{        
    //       this.timesheet.push(snapshot.exportVal());
    //   })

    console.log(this.timesheet);
    return 1;
  }
 }
