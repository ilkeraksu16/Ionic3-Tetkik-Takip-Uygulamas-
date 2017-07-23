import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TetkikProvider } from '../../providers/tetkik/tetkik';
import {ListePage} from '../liste/liste';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  Tc_no:string;
  liste:any;
  kontrol:any;
  uzunluk:any;
  
  splash = true;
  secondPage = HomePage;

  constructor(public navCtrl: NavController,private TetkikService : TetkikProvider,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {}

  Length_Account(){
    //this.uzunluk=this.Tc_no.lenght;
    //alert(this.uzunluk);
    /*this.Tc_no.valueChanges.subscribe((val) => {
      this.uzunluk = val.lenght,
      alert(val);
    });*/    
    this.uzunluk=this.Tc_no.valueOf().length;

  }


  Load(){
    let loader = this.loadingCtrl.create({
      content: "Lütfen Bekleyiniz.",
      duration: 500
    });
    loader.present();
  }

  LoginError(){
    let alert = this.alertCtrl.create({
      title: 'Hatalı Giriş Yaptınız !',
      subTitle: 'Lütfen tekrar deneyiniz.',
      buttons: ['Tamam']
    });
    alert.present();
  }

  PushPage(item){
    this.navCtrl.push(ListePage,{
      al:item
    })
  }

  GetTetkikData(){
    
    this.Load();

    if(this.Tc_no!=null){
      this.Length_Account();
      if(this.uzunluk != 10){
        this.LoginError();
      }else{
        this.TetkikService.GetTetkikService(this.Tc_no)
      .subscribe(res => {
        this.liste = res.Table,
        err => console.log(err),
        () => console.log(res);
        console.log(this.liste);
        if(this.liste!=""){
          this.PushPage(this.liste);
        }
        else{
          this.LoginError();
        }
        
      });
      }
      
    }else{
      this.LoginError();
    }  
  }

  ionViewDidLoad() {
    
    setTimeout(() => this.splash = false, 4000);
  

  }

  
}


