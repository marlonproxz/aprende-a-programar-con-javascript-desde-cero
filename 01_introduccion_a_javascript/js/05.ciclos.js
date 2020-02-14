// CICLO FOR

var cajas = document.querySelectorAll(".cajas")
console.log("cajas", cajas)

for (var i = 0; i < cajas.length; i++) {
    cajas[i].style.width = "50px"
    cajas[i].style.height = "50px"
    cajas[i].style.background = "blue"
    cajas[i].style.marginTop = "5px"
    cajas[i].style.marginRight = "5px"
    cajas[i].style.display = "inline-block"
}


for (var i = 1; i <= 5; i++) {
    console.log("i", i)
}

// CICLO WHILE

var n = 1
while (n <= 5) {
    console.log("n", n)
    n++
}

// CICLO DO WHILE

var p = 1
do {
    console.log("p", p)
    p++
}
while (p <= 5);