/*=============================================
EL OBJETO CON LAS PROPIEDADES DEL MOUSE
=============================================*/

var pm = {
    zona: document.querySelector('#efectoMouse'),
    figuras: document.querySelectorAll('#efectoMouse figure'),
    mouseX: 0,
    mouseY: 0,
    horizontal: true,
    vertical: false
}

/*=============================================
EL OBJETO CON LOS MÉTODOS DEL MOUSE
=============================================*/

var mm = {
    inicioMouse: function() {
        pm.zona.addEventListener('mousemove', mm.moviminetoMouse)
        for (var i = 0; i < pm.figuras.length; i++) {
            pm.figuras[i].style.zIndex = -i
            pm.figuras[i].innerHTML = '<img src="img/mouse/plano0' + i + '.png">'

        }

        setTimeout(function() {
            // console.log(pm.figuras[0].childNodes[0].height)
            pm.zona.style.height = pm.figuras[0].childNodes[0].height + "px"
        }, 100)



    },
    moviminetoMouse: function(mouse) {
        // console.log(mouse.offsetX, mouse.offsetY)
        pm.mouseX = mouse.offsetX
        pm.mouseY = mouse.offsetY

        for (var i = 0; i < pm.figuras.length; i++) {

            if (pm.horizontal) {
                pm.figuras[i].style.left = -pm.mouseX / (i * 100 + 50) + "%"
            }

            if (pm.vertical) {
                pm.figuras[i].style.top = pm.mouseY / (i * 100 + 50) + "%"
            }

        }

    }
}

mm.inicioMouse()