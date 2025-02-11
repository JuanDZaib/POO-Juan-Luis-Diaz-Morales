/*Evaluacion POO.
1. Genera una rama en tu repositorio que compartiste anteriormente con el nombre de evaluacion_poo.
2. Desarrollar un sistema de gestión de inventario para una papelería que permita realizar operaciones de venta, consultar el inventario y gestionar productos.
3. Debes de tener almenos 3 productos.
4. Se debe de guardar en memoria para poder hacer operaciones de aumento, resta, consulta en el numero de productos.
4. Procura que tu codigo tenga calidad.
5. Coloca como forma de comentarios en tus clases el por que las creaste.*/
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
            return "\nventa de ".concat(stock, " unidades de ").concat(producto.nombre, " vendidas");
        }
        return "No hay stock de ".concat(producto === null || producto === void 0 ? void 0 : producto.nombre);
    };
    InventarioManager.prototype.mostrarInventario = function () {
        this.productos.forEach(function (p) {
            console.log("\nCantidad           Nombre\n".concat(p.stock, "        ").concat(p.nombre));
        });
    };
    return InventarioManager;
}());
var inventario = new InventarioManager();
var libreta = new Producto(1, 'libreta de ben 10', 54, 100);
var goma = new Producto(2, 'Goma marca pelicano', 6, 200);
var lampara = new Producto(3, 'payasito lampara servilletero', 200, 34);
inventario.agregarProducto(libreta);
inventario.agregarProducto(goma);
inventario.agregarProducto(lampara);
inventario.mostrarInventario();
console.log(inventario.venderProducto(2, 1));
console.log(inventario.venderProducto(3, 1));
console.log(inventario.venderProducto(3, 4));
inventario.mostrarInventario();
