class Car{
    private nombre: string;
    private sexo:string;
    private edad:number;
    private peso:number;
    private color:string;
    private textura:string;
//miau aaaa
//gato 
    constructor(nombre:string,sexo:string,peso:number,edad:number,color:string,textura:string){
    this.nombre=nombre;
    this.sexo=sexo;
    this.edad=edad;
    this.peso=peso;
    this.color=color;
    this.textura=textura;
    }
    info(): void{
        console.log(`Nombre del gatito: ${this.nombre}\n sexo: ${this.sexo}\n edad: ${this.edad} años \n peso: ${this.peso} Kg\n color: ${this.color} \n textura: ${this.textura}`)
    } 
}
let oscar = new Car('Oscar','Macho', 2, 3.5, 'Negro','Peludito');
let luna = new Car('Luna','Hembra', 3, 2,'Calico', 'Esponjosa');

luna.info();
oscar.info();