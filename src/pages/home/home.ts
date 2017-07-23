import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TetkikProvider } from '../../providers/tetkik/tetkik';
import {ListePage} from '../liste/liste';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  Tc_no:any;
  liste:any;
  
  constructor(public navCtrl: NavController,private TetkikService : TetkikProvider) {}

  GetTetkikData(){
    this.TetkikService.GetTetkikService(this.Tc_no)
    .subscribe(res => {
      this.liste = res.Table,
      err => console.log(err),
      () => console.log(res),
      this.navCtrl.push(ListePage,{
        al:this.liste
      })
    });
  }
  
}


