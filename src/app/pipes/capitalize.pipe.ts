import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {

    // K2 para comprobar si es de tipo string
    // if(typeof value==='string'){
    //   const palabras=value.split(' ');
    //   const arrTemp=[];
    //   for (let palabra of palabras){
    //     arrTemp.push(palabra[0].toUpperCase()+palabra.slice(1).toLowerCase()); 
    //   } 
    //   return arrTemp.join(' ');
    // }

    if(typeof value==='string'){
      return value
      .split(' ')
      .map(palabra=>palabra[0].toUpperCase()+palabra.slice(1).toLowerCase())
      .join(' ');
    }
  }

}
