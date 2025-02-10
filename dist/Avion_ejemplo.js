var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase abstracta para un avión
var Avion = /** @class */ (function () {
    function Avion(modelo) {
        this.modelo = modelo;
    }
    Avion.prototype.fly = function () {
    };
    ;
    return Avion;
}());
// Clase para un simulador de vuelo
var AvionSimulador = /** @class */ (function (_super) {
    __extends(AvionSimulador, _super);
    function AvionSimulador(modelo, velocidad, altitud) {
        var _this = _super.call(this, modelo) || this;
        _this.velocidad = velocidad;
        _this.altitud = altitud;
        return _this;
    }
    AvionSimulador.prototype.mostrarInformacion = function () {
        console.log("Modelo: ".concat(this.modelo, ", Velocidad: ").concat(this.velocidad, " km/h, Altitud: ").concat(this.altitud, " metros."));
    };
    return AvionSimulador;
}(Avion));
// Clase para una aplicación de reserva de vuelos
var AvionReserva = /** @class */ (function (_super) {
    __extends(AvionReserva, _super);
    function AvionReserva(modelo, asientos) {
        var _this = _super.call(this, modelo) || this;
        _this.asientos = asientos;
        return _this;
    }
    AvionReserva.prototype.mostrarInformacion = function () {
        console.log("Modelo: ".concat(this.modelo, ", Asientos disponibles: ").concat(this.asientos.join(", "), "."));
    };
    return AvionReserva;
}(Avion));
// Ejemplo de uso
var avionSimulador = new AvionSimulador("Boeing 737", 800, 10000);
var avionReserva = new AvionReserva("Airbus A320", ["1A", "1B", "2A", "2B"]);
avionSimulador.mostrarInformacion(); // Salida: Modelo: Boeing 737, Velocidad: 800 km/h, Altitud: 10000 metros.
avionReserva.mostrarInformacion(); // Salida: Modelo: Airbus A320, Asientos disponibles: 1A, 1B, 2A, 2B.
