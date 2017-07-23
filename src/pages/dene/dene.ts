import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DenePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dene',
  templateUrl: 'dene.html',
})
export class DenePage {
  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.get('al');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenePage');
  }

}
