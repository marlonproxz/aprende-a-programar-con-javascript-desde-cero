/*=============================================
EL OBJETO DE LAS PROPIEDADES DEL BOTÓN MÓVIL
=============================================*/

var pb = {
    botonMovil: document.querySelector("#btnMovil span"),
    vistaBotones: false,
    botonera: document.querySelector("nav")
}

/*=============================================
EL OBJETO DE LAS MÉTODOS DEL BOTÓN MÓVIL
=============================================*/

var mb = {
    inicioMovil: function() {
        pb.botonMovil.addEventListener("click", mb.mostrarBotonera)
    },

    mostrarBotonera: function() {

        if (!pb.vistaBotones) {
            pb.vistaBotones = true
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-12"
        } else {
            pb.vistaBotones = false
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0"
        }

        console.log("pb.vistaBotones", pb.vistaBotones)
    }
}

mb.inicioMovil()