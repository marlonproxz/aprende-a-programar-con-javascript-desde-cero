// Importamos la clase BrowserModule, para buscar módulos de angular
import { BrowserModule } from '@angular/platform-browser';
// Importamos la clase NgModule que es el módulo raíz.
import { NgModule } from '@angular/core';

//Agregar HttpModule para trabajas con cabeceras HTTP
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
// Importamos el componente que es donde estará la vista principal de la aplicacion.
import { AppComponent } from './app.component';

import { IndexComponente } from './componentes/index';

import { SlideComponente } from './componentes/slide';

import { GaleriaComponente } from './componentes/galeria';

import { MouseComponente } from './componentes/mouse';

import { ScrollComponente } from './componentes/scroll';

import { FormularioComponente } from './componentes/formulario';

import { ApiComponente } from './componentes/api';

//Importamos los módulos de ruta
import {routing, appRoutingProviders} from './app.rutas'

// Los decoradores son funciones que modifican clases de Javascript. Angular tiene muchos decoradores que adjuntan metadatos de las clases para que sepa lo que significan estas clases y cómo deben funcionar. 

@NgModule({

//Las declaraciones son las clases de vista que pertenecen a este módulo. Angular tiene tres tipos de clases de vista: components, directives, and pipes.
  declarations: [
    AppComponent,
    IndexComponente,
    SlideComponente,
    GaleriaComponente,
    MouseComponente,
    ScrollComponente,
    FormularioComponente,
    ApiComponente
  ],
//Importamos otros módulos cuyas clases exportadas sean necesarias para las plantillas de componentes declaradas en este módulo.
  imports: [
    BrowserModule,
    AppRoutingModule,
    //cargo el modulo de rutas
    routing,
    //cargo el modulo de HTTP
    HttpModule
  ],
  //Los proveedores son los creadores de servicios que este módulo contribuye a la recolección global de servicios; Se vuelven accesibles en todas las partes de la aplicación. Esto lo habilitamos cuando invocamos servicios desde una base de datos.
  providers: [
  //Cargo el servicio que hace que el router se lance y funcione cada ruta cuando la llamemos  
  appRoutingProviders  
  ],
  bootstrap: [AppComponent]
})
//Exportamos la clase del modulo raiz para poder ser invocada en otros archivos
export class AppModule { }
