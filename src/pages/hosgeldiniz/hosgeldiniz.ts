import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the HosgeldinizPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-hosgeldiniz',
  templateUrl: 'hosgeldiniz.html',
})
export class HosgeldinizPage {

  splash = true;
  secondPage = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    setTimeout(() => this.splash = false, 4000);
  

  }

}
