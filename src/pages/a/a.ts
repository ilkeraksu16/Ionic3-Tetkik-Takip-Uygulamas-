import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/*
 * Generated class for the APage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
    
})
export class APage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.storage.get('id').then((data)=>{
      console.log('id:'+data)
    });
    
  }
/*
  save(al){
    console.log("veri eklendi" +al);
    this.storage.get('mystore').then((data)=>{
      if(data!=null){
        data.push(al);
        this.storage.set('mystore',data);
      }
      else{
        //let array = [];
        // array.push(al);
        data.push(al);
         this.storage.set('mystore',data);
      }
    })
  }
*/

  gir(){
    this.storage.set('id',1);
  }
  cik(){
    this.storage.set('id',0);
  }

  ngOnInit(){
    this.storage.set('id',0);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad APage');
  }

}
