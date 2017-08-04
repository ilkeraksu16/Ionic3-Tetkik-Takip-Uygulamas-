import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home'; 
import{Storage} from '@ionic/storage';
import {TetkikProvider} from '../../providers/tetkik/tetkik';
/**
 * Generated class for the ListePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html',
})
export class ListePage implements OnInit{

  item:any;
  Tc:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,private storage:Storage,public toastCtrl: ToastController,private TetkikService : TetkikProvider) {
  this.doRefresh(0);        

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Tetkikiniz Bulunmamaktadır.',
      duration: 3500
    });
    toast.present();
  }

      ngOnInit(){
        
        this.item=this.navParams.get('al');
        this.Tc = this.navParams.get('Tc');
        if(!this.Tc){
          this.storage.set('Tc',this.Tc);
        }

        if(!this.item){ 
          this.GetListe();
          if(this.item == ""){
            this.presentToast();
          }
        }else{
          this.PushListe();
        }
      }
      
      PushListe(){
        console.log("push liste");
        this.storage.set('liste',this.item);
      }
      GetListe(){
        this.storage.get('liste').then((data) =>{
          this.item = data;
        });
      }

  LogOut(){
    let confirm = this.alertCtrl.create({
      title: this.item[0].HASTA,//burada this.item[0].HASTA vardı sayfa yenilendiğinde hata verdiği için sildim
      message: 'Çıkış Yapmak İstediğinize Emin misiniz',
      buttons: [
        {
          text: 'İptal',
          handler: () => {
            
          }
        },
        {
          text: 'Çık',
          handler: () => {
            this.storage.set('id',0);
            this.storage.set('liste',null);
            this.storage.set('Tc',0);
            this.navCtrl.push(HomePage);
      
          }
        }
      ]
    });
    confirm.present();
  }

  doRefresh(refresher){
    this.TetkikService.GetTetkikService(this.Tc).subscribe(res => {
      this.item = res.Table;
      err => console.log(err);
      () => console.log(res);
      if(this.item!=""){
        this.storage.set('liste',this.item);
      }
    })
      if(refresher != 0)
      refresher.complete();
  }


}
  
  

