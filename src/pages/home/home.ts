import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AddtimesheetdetailPage} from '../addtimesheetdetail/addtimesheetdetail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  getTimesheet() {
    this.navCtrl.setRoot(AddtimesheetdetailPage);    
   }
}
