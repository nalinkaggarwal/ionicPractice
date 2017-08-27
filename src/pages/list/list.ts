import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatabaseserviceProvider} from '../../providers/databaseservice/databaseservice';
import { FirebaseListObservable} from 'angularfire2/database'
/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  list:FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DatabaseserviceProvider) {
    this.list = this.db.listTimesheetDetails();
  }


}
