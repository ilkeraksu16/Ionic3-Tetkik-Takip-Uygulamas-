import { Component,OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DenePage} from '../pages/dene/dene';
import { HomePage } from '../pages/home/home';
import {ListePage} from '../pages/liste/liste';
import {APage} from '../pages/a/a';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any;
  giris_id:number;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage : Storage) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(){
    
    this.storage.get('id').then((data)=>{
      this.giris_id = data;
      if(this.giris_id == 0){
      this.rootPage = DenePage;
    }else{
      this.rootPage = ListePage;
    }
    });
    
  }
  
}

