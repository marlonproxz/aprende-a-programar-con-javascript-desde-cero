import { Component } from '@angular/core';

// Importamos la clase del servicio Slide
import { ServicioSlide } from '../servicios/slide.servicio';

@Component({
    selector: "tag-slide",
    templateUrl: "../vistas/slide.html",
    //Para cargar el servicio en nuestro componente, debemos añadir la propiedad providers, esto nos permite mediante el injector de dependencias generar instancias de los objetos de los servicios
    providers: [ServicioSlide]
})

export class SlideComponente{

    public slideJson;

    constructor(private _ServicioSlide:ServicioSlide){
        // PRUEBA DEL SERVICIO

        // console.log(this._ServicioSlide.prueba())

        // PETICIONES HTTP PARA TRAER EL ARCHIVO JSON

        this._ServicioSlide.tomarJsonSlide().subscribe(
            resultado => {
                this.slideJson = resultado;
                console.log("this.slideJson", this.slideJson[0]["titulo"]);
            },
            
            error => {
                var mensajeError = <any>error;
            });
    }
}