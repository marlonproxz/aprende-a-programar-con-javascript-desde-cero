// FUNCIONES SIN PARÁMETROS
var globales = 10
console.log("globales", globales)
    // Declaramos la función

function saludo() {
    // Tarea de la función
    console.log("saludo", "hola")
}

// Ejecutamos la función
saludo()

// FUNCIONES CON PARÁMETROS

function operacion(digito1, digito2) {
    var resultado = digito1 + digito2
    globales = resultado
    console.log("globales_operacion", globales)
    console.log("resultado", resultado)
}

operacion(5, 7)
operacion(10, 5)

// FUNCIONES CON RETORNO SIN PARÁMETROS

function retorno1() {
    var numero = 5
    return numero
}

console.log(retorno1())

// FUNCIONES CON RETORNO CON PARÁMETROS

function retorno2(numero) {
    return numero;
}

console.log(retorno2(10))