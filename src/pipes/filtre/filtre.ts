import { Pipe, PipeTransform } from '@angular/core';
import{ HastaTetkik } from '../../../hastatetkik'; 


@Pipe({
  name: 'filtre',
})
export class FiltrePipe implements PipeTransform {
  
  transform(value: HastaTetkik[], filter:string) {
    filter = filter?filter.toLocaleLowerCase():null;
    return filter? //filter değeri varsa
    value.filter((p:HastaTetkik) => //value değerlerine filter methodunu uygula ve p tanımlanıyor.
    p.TETKIK.toLocaleLowerCase().indexOf(filter)!=-1 ||
     p.DOKTOR.toLocaleLowerCase().indexOf(filter)!=-1 || 
    p.TARIHI.toLocaleLowerCase().indexOf(filter)!=-1):value; 
  
  }
}
