import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TetkikProvider {

//  url='http://192.168.1.40:41/api/HastaTetkik';
  url='http://hastabilgitakipapi.azurewebsites.net/api/HastaTetkik';
  //url='http://localhost:54155/api/HastaTetkik';
  
  constructor(private http: Http) {}

  GetTetkikService(item){
    return this.http.get(this.url + '/' + item)
    .map(res => res.json());

  }
  

  

}

