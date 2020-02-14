/*=============================================
EL OBJETO DE LAS PROPIEDADES DEL FORMULARIO
=============================================*/

var pf = {
    entradas: document.querySelectorAll("input.validar"),
    valor: null
}

/*=============================================
EL OBJETO CON LAS METODOS DEL FORMULARIO
=============================================*/

var mf = {
    inicioFormulario: function() {
        for (var i = 0; i < pf.entradas.length; i++) {
            pf.entradas[i].addEventListener("focus", mf.enFoco)
            pf.entradas[i].addEventListener("blur", mf.fueraFoco)
            pf.entradas[i].addEventListener("change", mf.cambioEntrada)
        }

    },

    enFoco: function(input) {
        // console.log("input", input.target.id)
        pf.valor = input.target.value

        if (pf.valor == "") {
            document.querySelector("#" + input.target.id).style.background = "rgba(255,255,0,.5)"

            document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 1
        }
        document.querySelector("[for=" + input.target.id + "]").appendChild(document.createElement("DIV")).setAttribute("class", "error")

    },

    fueraFoco: function(input) {

        document.querySelector("#" + input.target.id).style.background = "white"

        document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 0
    },

    cambioEntrada: function(input) {

        pf.valor = input.target.value

        if (pf.valor != "") {

            switch (input.target.id) {

                case "usuario":

                    if (pf.valor.length < 2 || pf.valor.length > 6) {
                        document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: ' + input.target.placeholder + '</span>'
                    } else {
                        document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"))
                    }

                    break;
                case "password":

                    break;
                case "email":

                    break;

            }
        }

    }
}

mf.inicioFormulario()