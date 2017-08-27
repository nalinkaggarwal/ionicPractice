import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') uname;
  @ViewChild('password') password;
  constructor(private login: LoginProvider, public navCtrl: NavController, public alertCntrl: AlertController) {

  }

  alert(message: string) {
    this.alertCntrl.create({
      title: "Info!",
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  signIn() {
    this.login.signIn(this.uname.value, this.password.value)
      .then(data => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        this.alert(error.message);
      });
  }
  register() {
    this.navCtrl.setRoot(RegisterPage);
  }
}
