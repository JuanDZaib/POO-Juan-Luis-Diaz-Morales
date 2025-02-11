/*Evaluacion POO.
1. Genera una rama en tu repositorio que compartiste anteriormente con el nombre de evaluacion_poo.
2. Desarrollar un sistema de gestión de inventario para una papelería que permita realizar operaciones de venta, consultar el inventario y gestionar productos.
3. Debes de tener almenos 3 productos.
4. Se debe de guardar en memoria para poder hacer operaciones de aumento, resta, consulta en el numero de productos.
4. Procura que tu codigo tenga calidad.
5. Coloca como forma de comentarios en tus clases el por que las creaste.*/

//En esta interfaz defino los atributos ESCENCIALES de un producto
interface JProducto{
    id:number;
    nombre:string;
    precio:number;
    stock:number;
}
//En esta clase implementamos nuestra interfaz, aqui le damos sentido a como funcionaran los productos (en el inventario) y sus propiedades
//implementando un metodo para agregar y otro para quitar o reducir el stock de productos.
class Producto implements JProducto{
    constructor(
        public id:number,
        public nombre:string,
        public precio:number,
        public stock:number,
    ){}
    aumentarStock(stock:number):void{
        this.stock += stock;
    }
    reducirStock(stock:number):boolean{
        if(this.stock>=stock){
            this.stock-=stock;
            return true;
        }
        return false;
    }
}
//Esta clase inventario manager se encarga de gestionar todas las acciones que el personal realize sobre los productos, utilizando un arreglo
//es capaz de agregar un producto con el metodo agregarProducto, consultar producto mediante su id o no mostrar nada si la id no existe
//con el metodo venta de producto mediante su id y la cantidad de unidades,llamamos al metodo de consultar producto y reducir stock, esto con el fin de verificar si
//hay stock del producto, de ser asi, reduce el stock la cantidad de n veces por compra, de no haber en inventario devuelve un mensaje indicandolo,
//y finalmente el metodo mostrar inventario, el cual recorre el arreglo mostrando cantidad y nombre
class InventarioManager{
    private productos:Producto[]=[];

    agregarProducto(producto:Producto):void{
        this.productos.push(producto);
    }
    consultarProducto(id:number):Producto|undefined{
        return this.productos.find(p=>p.id===id)
   }
   venderProducto(id:number,stock:number):string{
    const producto=this.consultarProducto(id);
    if(producto&&producto.reducirStock(stock)){
        return `venta de ${stock} unidades de ${producto.nombre} vendidas`;
    }
    return `No hay stock de ${producto?.nombre}`;
   }
   mostrarInventario():void{
    this.productos.forEach(p=>{
        console.log(`Cantidad           Nombre\n${p.stock}        ${p.nombre}`)
    })
   }

}

//Esta clase hija de la clase producto cuenta con un atributo especial para los aparatos electronicos, el cual 
//verifica si tiene garantia o no, basado en ello envia un mensaje al igual que aplicar el poliformismo en el metodo de reducir el stock
//ya que al momento de venderlo define si cuenta con garantia o no
class ProductoElectronico extends Producto{
    public garantia:boolean;
    constructor(id:number,nombre:string,stock:number,precio:number,garantia:boolean){
        super(id,nombre,precio,stock)
        this.garantia=garantia;
    }
reducirStock(stock: number): boolean {
    console.log(`Procesando garantia de prodcto`)
    if(this.garantia){
        console.log('Este producto si cuenta con garantia');
    }else{
        console.log('Este producto no tiene garantia');
    }
    return super.reducirStock(stock);
}    
comprobanteGarantia():string{
    return this.garantia?"producto con garantia":"producto sin garantia";
}

}

const inventario=new InventarioManager();

const libreta =new Producto(1,'libreta de ben 10',54,100);
const goma=new Producto(2,'Goma marca pelicano',6,200);
const lampara=new Producto(3,'payasito lampara servilletero',200,34);
const calculadora=new ProductoElectronico(4,'calculadora',39,58,false);
const audifonos=new ProductoElectronico(5,'audifonos',39,58,true);

inventario.agregarProducto(libreta);
inventario.agregarProducto(goma);
inventario.agregarProducto(lampara);
inventario.agregarProducto(calculadora);
inventario.agregarProducto(audifonos);
inventario.mostrarInventario();

console.log(inventario.venderProducto(2,1));
console.log(inventario.venderProducto(3,1));
console.log(inventario.venderProducto(3,4));
console.log(inventario.venderProducto(4,1));
console.log(inventario.venderProducto(5,1));


inventario.mostrarInventario()
console.log(calculadora.comprobanteGarantia())
console.log(audifonos.comprobanteGarantia())
