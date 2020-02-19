//Los servicios son clases con un objetivo claro que nos facilitan la reutilización de código, y son un tipo de módulo que nos va a permitir separar el trabajo con APIS, con HTTP, con Bases de datos y que através de la inyección de dependecias podemos enviar la información y utilizarla en los principales componentes

//Importamos el decorador Injectable, para poder injectar nuestra clase mediante la inyeccion de dependencias en los componentes
import {Injectable} from '@angular/core';

// Si vamos a hacer peticiones HTTP debemos importar los siguientes módulos:
import {Http, Response, Headers} from '@angular/http';

// Tambien importamos una librería para Mapear las respuestas HTTP
import 'rxjs/add/operator/map';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

//Importamos también el objeto Observable que nos va a permitir utilizar rxjs que es la respuesta del mapeo y trabajar con ello
// import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';

//Definimos el decorador injectable
@Injectable()

// Exportamos la clase del servicio
export class ServicioSlide{
    // PRUEBA DEL SERVICIO

    // public ruta_foto = "assets/img/slide/slide01.jpg";

    // prueba(){
    //     return this.ruta_foto;
    // }

    // PETICIONES HTTP PARA TRAER EL ARCHIVO JSON
    
    public url:string;
    // Para poder utilizar el servicio HTTP debemos tener una propiedad HTTP en nuestra clase
    constructor(private _http:Http){
        //Instalar el componente Allow-Control-Allow-Origin: *
        this.url = "https://www.tutorialesatualcance.com/slide.json";
    }

    tomarJsonSlide(){
        return this._http.get(this.url).map(resultado => resultado.json())
    }
}
