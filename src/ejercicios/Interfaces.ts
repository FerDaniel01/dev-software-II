function sumar(a:number , b:number):number{
    return a+b ;
}

const result: number= sumar(4,5)  

const sumar2 =(n1: number, n2: number): number=>{
    return n1+n2;
}
const resultado: number= sumar2(7,5) 
console.log(result, resultado)

function multiplicar(primerNumber: number, base: number=4, segundoNumber?: number): number{// si base no viene el valor sera 4
    return primerNumber* base;
}
const res: number= multiplicar(7,3);
console.log({res})
////////***************************************////////////
interface PersonajeInterface{
    nombre: string;
    vida: number;
    mostrarDetalle: ()=>void;
}

const porcentajeVida= (personaje:PersonajeInterface , vida: number)=>{
    personaje.vida+= vida;
}

const persona1 : PersonajeInterface= {
    nombre: 'Pepito',
    vida: 20,
    mostrarDetalle() {
        console.log( `Nombre ->${this.nombre} Vida ${this.vida}`)
    },
}

console.log(persona1);
porcentajeVida(persona1,30);

console.log(persona1)
persona1.mostrarDetalle();


// 
    interface DireccionInterface {
    ciudad: string;
    pais: string; 
}
interface UsuarioInterface{
    id: number;
    nombre: string; 
    email: string; 
    activo: boolean;
    roles:string[];
    direccion: DireccionInterface;


saludar:()=>string;
actualizarEmail:(nuevoEmail: string)=>void;


}
const direccion: DireccionInterface={
    ciudad: "Bogotá",
    pais: 'Colombia'
}

const usuario1: UsuarioInterface={
    id:1,
    nombre: 'Ana Perez',
    email: 'ana@example.com',
    activo: true,
    roles: ['admin', 'editor'],
    direccion: direccion,
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;

   
    },
     actualizarEmail(nuevoEmail: string){
        this.email= nuevoEmail;
    }

}

console.log(usuario1.email);
console.log(usuario1.saludar());
usuario1.actualizarEmail('test');
console.log(usuario1.email)
    // saludar(): string{
    //     return `Hola, mi nombre es ${this}`;
    // }
export{};