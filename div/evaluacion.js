/*Evaluacion POO.
1. Genera una rama en tu repositorio que compartiste anteriormente con el nombre de evaluacion_poo.
2. Desarrollar un sistema de gestión de inventario para una papelería que permita realizar operaciones de venta, consultar el inventario y gestionar productos.
3. Debes de tener almenos 3 productos.
4. Se debe de guardar en memoria para poder hacer operaciones de aumento, resta, consulta en el numero de productos.
4. Procura que tu codigo tenga calidad.
5. Coloca como forma de comentarios en tus clases el por que las creaste.*/
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
//En esta clase implementamos nuestra interfaz, aqui le damos sentido a como funcionaran los productos (en el inventario) y sus propiedades
//implementando un metodo para agregar y otro para quitar o reducir el stock de productos.
var Producto = /** @class */ (function () {
    function Producto(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    Producto.prototype.aumentarStock = function (stock) {
        this.stock += stock;
    };
    Producto.prototype.reducirStock = function (stock) {
        if (this.stock >= stock) {
            this.stock -= stock;
            return true;
        }
        return false;
    };
    return Producto;
}());
//Esta clase inventario manager se encarga de gestionar todas las acciones que el personal realize sobre los productos, utilizando un arreglo
//es capaz de agregar un producto con el metodo agregarProducto, consultar producto mediante su id o no mostrar nada si la id no existe
//con el metodo venta de producto mediante su id y la cantidad de unidades,llamamos al metodo de consultar producto y reducir stock, esto con el fin de verificar si
//hay stock del producto, de ser asi, reduce el stock la cantidad de n veces por compra, de no haber en inventario devuelve un mensaje indicandolo,
//y finalmente el metodo mostrar inventario, el cual recorre el arreglo mostrando cantidad y nombre
var InventarioManager = /** @class */ (function () {
    function InventarioManager() {
        this.productos = [];
    }
    InventarioManager.prototype.agregarProducto = function (producto) {
        this.productos.push(producto);
    };
    InventarioManager.prototype.consultarProducto = function (id) {
        return this.productos.find(function (p) { return p.id === id; });
    };
    InventarioManager.prototype.venderProducto = function (id, stock) {
        var producto = this.consultarProducto(id);
        if (producto && producto.reducirStock(stock)) {
            return "venta de ".concat(stock, " unidades de ").concat(producto.nombre, " vendidas");
        }
        return "No hay stock de ".concat(producto === null || producto === void 0 ? void 0 : producto.nombre);
    };
    InventarioManager.prototype.mostrarInventario = function () {
        this.productos.forEach(function (p) {
            console.log("Cantidad           Nombre\n".concat(p.stock, "        ").concat(p.nombre));
        });
    };
    return InventarioManager;
}());
//Esta clase hija de la clase producto cuenta con un atributo especial para los aparatos electronicos, el cual 
//verifica si tiene garantia o no, basado en ello envia un mensaje al igual que aplicar el poliformismo en el metodo de reducir el stock
//ya que al momento de venderlo define si cuenta con garantia o no
var ProductoElectronico = /** @class */ (function (_super) {
    __extends(ProductoElectronico, _super);
    function ProductoElectronico(id, nombre, stock, precio, garantia) {
        var _this = _super.call(this, id, nombre, precio, stock) || this;
        _this.garantia = garantia;
        return _this;
    }
    ProductoElectronico.prototype.reducirStock = function (stock) {
        console.log("Procesando garantia de prodcto");
        if (this.garantia) {
            console.log('Este producto si cuenta con garantia');
        }
        else {
            console.log('Este producto no tiene garantia');
        }
        return _super.prototype.reducirStock.call(this, stock);
    };
    ProductoElectronico.prototype.comprobanteGarantia = function () {
        return this.garantia ? "producto con garantia" : "producto sin garantia";
    };
    return ProductoElectronico;
}(Producto));
var inventario = new InventarioManager();
var libreta = new Producto(1, 'libreta de ben 10', 54, 100);
var goma = new Producto(2, 'Goma marca pelicano', 6, 200);
var lampara = new Producto(3, 'payasito lampara servilletero', 200, 34);
var calculadora = new ProductoElectronico(4, 'calculadora', 39, 58, false);
var audifonos = new ProductoElectronico(5, 'audifonos', 39, 58, true);
inventario.agregarProducto(libreta);
inventario.agregarProducto(goma);
inventario.agregarProducto(lampara);
inventario.agregarProducto(calculadora);
inventario.agregarProducto(audifonos);
inventario.mostrarInventario();
console.log(inventario.venderProducto(2, 1));
console.log(inventario.venderProducto(3, 1));
console.log(inventario.venderProducto(3, 4));
console.log(inventario.venderProducto(4, 1));
console.log(inventario.venderProducto(5, 1));
inventario.mostrarInventario();
console.log(calculadora.comprobanteGarantia());
console.log(audifonos.comprobanteGarantia());
