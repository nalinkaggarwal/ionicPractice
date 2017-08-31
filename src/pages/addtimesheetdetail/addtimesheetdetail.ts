import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimesheetdetailProvider } from '../../providers/timesheetdetail/timesheetdetail';
import { TimeSheet } from '../../models/timesheet.model';
/**
 * Generated class for the AddtimesheetdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtimesheetdetail',
  templateUrl: 'addtimesheetdetail.html',
})
export class AddtimesheetdetailPage {
  punchTimeSheetDetails: TimeSheet = new TimeSheet();
  constructor(public navCtrl: NavController, public navParams: NavParams, private _timesheet: TimesheetdetailProvider) {
  }
  punched() {
    this.punchTimeSheetDetails.punchDate = this.getDateOrTime(true);
    this.punchTimeSheetDetails.punchTime = this.getDateOrTime(false);
    this._timesheet.punchTime(this.punchTimeSheetDetails);
  }

  getDateOrTime(IsDate: boolean) {
    var today = new Date();
    var dd;
    var mm; //January is 0!
    var yyyy = today.getFullYear();

    if (today.getDate() < 10) {
      dd = '0' + today.getDate().toString()
    }
    else {
      dd = today.getDate().toString();
    }
    if (today.getMonth() < 10) {
      mm = '0' + (today.getMonth() + 1).toString()
    }
    else {
      mm = today.getMonth().toString();
    }
    if (IsDate)
      return mm + '/' + dd + '/' + yyyy;
    else
      return today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  }
}
