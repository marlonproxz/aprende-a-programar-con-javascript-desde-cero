import { Component } from '@angular/core';
import { ServicioGaleria } from '../servicios/galeria.servicio';

@Component({
    selector: "tag-galeria",
    templateUrl: "../vistas/galeria.html",
    providers: [ServicioGaleria]
})

export class GaleriaComponente{
    public galeriaJson;
    constructor(private _ServicioGaleria:ServicioGaleria){
        // PRUEBA DEL SERVICIO
        // console.log(this._ServicioGaleria.prueba())

        // PETICIONES HTTP PARA TRAER EL ARCHIVO JSON

        this._ServicioGaleria.tomarJsonGaleria().subscribe(
            resultado => {
                this.galeriaJson = resultado;
                console.log("this.galeriaJson", this.galeriaJson[0]["foto"]);
            },
            
            error => {
                var mensajeError = <any>error;
            });
    }
}