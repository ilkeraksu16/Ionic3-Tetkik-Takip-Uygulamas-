import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
export class ListePage {

  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item=this.navParams.get('al');

  }

  

}
