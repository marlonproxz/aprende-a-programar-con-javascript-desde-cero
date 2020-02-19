var Automovil = /** @class */ (function () {
    function Automovil() {
    }
    //MÉTODO: Es el algoritmo asociado a un objeto que indica la capacidad de lo que este puede hacer la única diferencia entre método y función es que llamamos método a las funciones de una clase o de un objeto (EN POO), mientras que llamamos funciones a los algoritmos de la programacion estructurada.
    Automovil.prototype.mostrar = function () {
        return "Hola! soy un " + this.marca + ", " + this.modelo;
    };
    return Automovil;
}());
//OBJETO: Es una entidad provista de métodos o mensajes a los cuales responde propiedades con valores concretos
var automovil1 = new Automovil();
automovil1.marca = "Toyota";
automovil1.modelo = "2015";
console.log(automovil1.mostrar());
var automovil2 = new Automovil();
automovil2.marca = "Mazda";
automovil2.modelo = "2010";
console.log(automovil2.mostrar());
