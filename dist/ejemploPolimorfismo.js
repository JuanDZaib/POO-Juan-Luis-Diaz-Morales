var ClassCat = /** @class */ (function () {
    function ClassCat() {
    }
    ClassCat.prototype.hacerSonido = function () {
        console.log("Miau!!!");
    };
    return ClassCat;
}());
var ClassDog = /** @class */ (function () {
    function ClassDog() {
    }
    ClassDog.prototype.hacerSonido = function () {
        console.log("Wuau!!");
    };
    return ClassDog;
}());
var ClassLion = /** @class */ (function () {
    function ClassLion() {
    }
    ClassLion.prototype.hacerSonido = function () {
        console.log("Rooarrr!!");
    };
    return ClassLion;
}());
function hacerSonidosAnimales(animales) {
    animales.forEach(function (animal) {
        animal.hacerSonido();
    });
}
var gatoObj = new ClassCat();
var perroObj = new ClassDog();
var lionObj = new ClassLion();
var animales = [gatoObj, perroObj, lionObj];
hacerSonidosAnimales(animales);
