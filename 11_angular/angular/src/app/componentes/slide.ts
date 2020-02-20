import { Component, OnInit } from '@angular/core';

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
                // console.log("this.slideJson", this.slideJson[0]["titulo"]);
                console.log("this.slideJson", this.slideJson[0].titulo);
            },
            
            error => {
                var mensajeError = <any>error;
            });
    }

    ngOnInit(){
        // this.saludo();
        // setTimeout(()=>{
        //     console.log("pagina",document.querySelectorAll("#paginacion li"));
        // },100);
        
        setTimeout(()=>{
        // OBJETO CON LAS PROPIEDADES DEL SLIDE
        var p = {
            paginacion: document.querySelectorAll('#paginacion li'),
            item: 0,
            cajaSlide: document.querySelectorAll("#slide ul"),
            animacionSlide: "slide",
            imgSlide: document.querySelectorAll('#slide ul li'),
            avanzar: document.querySelector('#slide #avanzar'),
            retroceder: document.querySelector('#slide #retroceder'),
            velocidadSlide: 3000,
            formatearLoop: false
        }
        
        // OBJETO CON LOS MÉTODOS DEL SLIDE
        
        var m = {
            inicioSlide: function() {
                for (var i = 0; i < p.paginacion.length; i++) {
                    p.paginacion[i].addEventListener("click", m.paginacionSlide)
                    p.imgSlide[""+i].style.width = (100 / p.paginacion.length) + "%"
                }
        
                p.avanzar.addEventListener("click", m.avanzar)
                p.retroceder.addEventListener("click", m.retroceder)
        
                m.intervalo()
        
                p.cajaSlide["0"].style.width = (p.paginacion.length * 100) + "%"
            },
            paginacionSlide: function(item) {
                // console.log("item", item.target.parentNode.getAttribute("item"))
                p.item = item.target.parentNode.getAttribute("value") - 1
                m.movimientoSlide(p.item)
            },
            avanzar: function() {
                if (p.item == p.imgSlide.length - 1) {
                    p.item = 0
                } else {
                    p.item++
                }
        
                // console.log("p.item", p.item)
                // console.log(p.imgSlide.length)
                m.movimientoSlide(p.item)
            },
            retroceder: function() {
                if (p.item == 0) {
                    p.item = p.imgSlide.length - 1
                } else {
                    p.item--
                }
        
                // console.log("p.item", p.item)
                // console.log(p.imgSlide.length)
                m.movimientoSlide(p.item)
            },
            movimientoSlide: function(item) {
        
                p.formatearLoop = true
        
                // console.log("item", -(item * 100))
                p.cajaSlide["0"].style.left = item * -100 + "%"
        
                // console.log(item * -100 + "%")
                for (var i = 0; i < p.paginacion.length; i++) {
                    p.paginacion[""+i].style.opacity = .5
                }
                // console.log(item)
                p.paginacion[""+item].style.opacity = 1
        
                if (p.animacionSlide == "slide") {
                    p.cajaSlide["0"].style.transition = ".7s left ease-in-out"
                }
        
                if (p.animacionSlide == "fade") {
                    p.imgSlide[""+item].style.opacity = 0
                    p.imgSlide[""+item].style.transition = ".7s opacity ease-in-out"
        
                    setTimeout(function() {
                        // p.imgSlide[item].style.transition = ".7s opacity ease-in-out"
                        p.imgSlide[""+item].style.opacity = 1
                    }, 500)
                }
        
            },
            intervalo: function() {
                setInterval(function() {
        
                    if (p.formatearLoop) {
        
                        p.formatearLoop = false
        
                    } else {
                        m.avanzar()
                    }
        
                }, p.velocidadSlide)
            }
        }
        
        m.inicioSlide()
    },100);
    }

    // saludo(){
    //     console.log("Hola");
    // }
}