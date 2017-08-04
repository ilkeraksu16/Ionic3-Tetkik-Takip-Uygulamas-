import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ListePage} from '../pages/liste/liste';
import { HosgeldinizPage } from '../pages/hosgeldiniz/hosgeldiniz';
import { TetkikProvider } from '../providers/tetkik/tetkik';
import { DenePage } from '../pages/dene/dene';
import { FiltrePipe } from '../pipes/filtre/filtre';
import {APage} from '../pages/a/a';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListePage,
    DenePage,
    HosgeldinizPage,
    FiltrePipe,
    APage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListePage,
    DenePage,
    HosgeldinizPage,
    APage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TetkikProvider
  ]
})
export class AppModule {}
