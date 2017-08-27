import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { RegisterProvider } from '../../providers/register/register';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('email') uname;
  @ViewChild('password') password;
  @ViewChild('name') name;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _register: RegisterProvider) {
  }

  register() {
    this._register.register(this.uname.value, this.password.value)
      .then(data => {
        this._register.addUserDEtail(this.name.value)
          .then(data => {
            this.clearData();
          })
      })
      .catch(error => {

      });
  }
  Login() {
    this.navCtrl.setRoot(LoginPage);
  }
  clearData() {
    this.uname.value = '';
    this.password.value = '';
    this.name.value = '';
  }
}
