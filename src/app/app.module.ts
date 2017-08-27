import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth'
import { DatabaseserviceProvider } from '../providers/databaseservice/databaseservice';
import { LoginProvider } from '../providers/login/login';
import { RegisterProvider } from '../providers/register/register';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { TimesheetdetailProvider } from '../providers/timesheetdetail/timesheetdetail';
import { AddtimesheetdetailPage} from '../pages/addtimesheetdetail/addtimesheetdetail';
var firebaseConfig = {
  apiKey: "AIzaSyD38alr3coWwPAWZhss6PiAxf6hnRgxcIo",
  authDomain: "timesheetdetails-c2d14.firebaseapp.com",
  databaseURL: "https://timesheetdetails-c2d14.firebaseio.com",
  projectId: "timesheetdetails-c2d14",
  storageBucket: "timesheetdetails-c2d14.appspot.com",
  messagingSenderId: "1002787569158"
};
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    RegisterPage,
    AddtimesheetdetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    RegisterPage,
    AddtimesheetdetailPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatabaseserviceProvider,
    LoginProvider,
    RegisterProvider,
    TimesheetdetailProvider
  ]
})
export class AppModule { }
