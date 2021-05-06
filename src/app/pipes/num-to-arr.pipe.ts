import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArr'
})
export class NumToArrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    
    // L2
    if(typeof value==='number'){
      //si utilizo la clase Array puedo crear un array de tamanio que yo quiera
      // en este caso el tamanio es value...si le saco las claves .keys()...
      // ahpra para convertir todo esto en un array y copia ...lo rodeo de 
      // corchetes y con los tres puntos nos hace una copia 
      // Si retorno me da un array que sus posiciones no me interesa
      //===entonces con esto estoy convirtiendo un numero en un array para poder
      // iterarlo
      return [...Array(value).keys()]
    }
  }

}
