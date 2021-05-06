import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  // EL METodo transform recibe dos variables el cual es el valor
  // la segunda que es un array con todos los parametros que queremos pasar
  // a este metodo transform ...lo que devolvamos es lo que se va a visualizar
  // en el html cuando apliquemos este pipe
  transform(value: string, ...args: unknown[]): unknown {
    // para dar vuelta vamos a primero tranformarlo en array
    // el split convierte un string en un array
    return value.split('').reverse().join('');
    
    
  }

}
