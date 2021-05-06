
// A3 Un toquen que vamos a utilizar el LOCALE_ID para que en 
// los providers => A3
import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// A2 REGistrarle el locale en concreto con el que vamos a trabajar
import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// para el ejemplo de slice usaremos el ngModel
import {FormsModule} from '@angular/forms';

// importo modulo http
import {HttpClientModule} from '@angular/common/http';
import { ReversoPipe } from './pipes/reverso.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NumToArrPipe } from './pipes/num-to-arr.pipe';



//  esto hay que llamarlo antes de que carge el modulo...
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ReversoPipe,
    CapitalizePipe,
    NumToArrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // A3 para que en los providers generemos un nuevo objeto en el que le diremos
  // cual es el id en el que queremos proveer en este caso es el LOCALE_ID...
// y el cosigo generco con el que vamos a trabajr 'es_ES'
// de esta  manera nuestra app trabajara en castellano
  providers: [{
    provide:LOCALE_ID, useValue:'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
