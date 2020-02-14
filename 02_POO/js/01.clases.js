// POO 
// es un paradigma de programación que usa objetos en sus interacciones,
// para diseñas aplicaciones y programas informáticos. Esta basada en varias
// tecnicas, incluyendo herencia, cohesión, abstracción, polimorfismo,
// aclopamiento y encapsulamiento.
// CLASES
// Las clases, son funciones constructoras y siempre las vamos a iniciar con Mayúsculas
// ejemplo: new String()
// nos permite construir la base de la progracion que queremos hacer

// CLASES PRIMITIVAS
// Clase String
var string = new String("Esto es un string")
console.log("string", string)

//Clase Number
var number = new Number(12)
console.log("number", number)

// Clase Boolean
var boolean = new Boolean(false)
console.log("boolean", boolean)

// CLASES COMPUESTAS
// Clase Array
var array = new Array("rojo", "amarillo", "verde")
console.log("array", array)

// Clase Object
var object = new Object({ nombre: "Marlon", edad: "26" })
console.log("object", object)

// CLASES CREADAS POR EL PROGRAMADOR
// Creamos el Prototipo

function Persona() {
    // Propiedades Públicas
    this.nombre;
    this.edad;
}

var yo = new Persona()
yo.nombre = "Marlon"
yo.edad = "26"
console.log("yo", yo)

// Clases con parámetros
function Animales(nombre, raza) {
    this.nombre = nombre
    this.raza = raza
}

var mascota = new Animales("perro", "pitbul")
console.log("mascota", mascota)