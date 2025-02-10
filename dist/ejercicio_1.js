var Car = /** @class */ (function () {
    //miau aaaa
    //gato 
    function Car(nombre, sexo, peso, edad, color, textura) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
        this.peso = peso;
        this.color = color;
        this.textura = textura;
    }
    Car.prototype.info = function () {
        console.log("Nombre del gatito: ".concat(this.nombre, "\n sexo: ").concat(this.sexo, "\n edad: ").concat(this.edad, " a\u00F1os \n peso: ").concat(this.peso, " Kg\n color: ").concat(this.color, " \n textura: ").concat(this.textura));
    };
    return Car;
}());
var oscar = new Car('Oscar', 'Macho', 2, 3.5, 'Negro', 'Peludito');
var luna = new Car('Luna', 'Hembra', 3, 2, 'Calico', 'Esponjosa');
luna.info();
oscar.info();
