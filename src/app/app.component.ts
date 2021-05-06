import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    /*B2 este currency Pipes se encarga mas que todo de precios ejemplo productos  
  luego intentando visualizar  */
    precio:number;

    /* C2  */
    numero:number;

    /*D2 */
    fechaActual:Date;

    // E2 PercentPipe
    numAleatorio:number;

    // F2 JSONpipe...ejemeplo de tipo cualtquioera
    estudiante:any;

    // G2 Lower, Uper, Title
    texto:string;

    // H2 SlicePipe
    animales:string[];
    minimo:number;
    maximo:number;

    // I2 AsyncPipe...puede devolverme lo que sea ...un string en este caso
    prom:Promise<string>;
    // I4 creando e inyectando dentro el constructor
    promPosts:Promise<any[]>;


  constructor(private postsService:PostsService){
    //  B2
    this.precio=198.87;

    //  C2
    this.numero=3.2343245234;

    // D2 new date me devuele la fecha de este momento
    this.fechaActual=new Date();

    // E2 con mathrandomtendremos un numero entre 0 y 1
    this.numAleatorio=Math.random();

    // F2 inicializando como un objeto mas complejo
    this.estudiante={
      nombre:'eLIAS',
      apellidos:'Moller',
      notas:[2,6,2,12]
    }

    // G2
    this.texto='En un lugar de la Mancha';

    // H2
    this.animales=['perro','gato','PAJARO','tortuga'];
    this.minimo=0;
    this.maximo=this.animales.length;

    // I2 generando la promesa...siempre reciben una funcion anonima con resolve y reject
    this.prom=new Promise((resolve,reject)=>{
      // aqui lo que va hacer es resolver la promesa con un string 
      setTimeout(()=>resolve('se resuelve la promesa pasados 4 segundos'),4000)
    });

    // I4 inicializando /...pero intentando resolverla dentro del html => I5
    this.promPosts=this.postsService.getAll();



  }
  // D4 Con la fumcion setInterval
  ngOnInit(){
    setInterval(()=>this.fechaActual=new Date(),1000);
  }
}
