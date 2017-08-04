import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-dene',
  templateUrl: 'dene.html',
})
export class DenePage {
  item:any;
  splash = true;
  secondPage = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    
    setTimeout(() => {this.splash=false,this.navCtrl.push(HomePage)},3300);

    
    
   // this.navCtrl.push(HomePage);
  

  }
  

}
