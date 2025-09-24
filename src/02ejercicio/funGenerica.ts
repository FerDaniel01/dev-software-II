// function crearCaja<T>(argument: T): T{
//     return argument;
// }
interface comida{
    nombre: string;
    calorias: number;
 


}


const vaca:  comida={
    nombre: "Carne",
    calorias: 1000000
}

// let prueba: number= crearCaja(5);
// //let prueba1: boolean= verTipo(true);
// //let prueba2: number= verTipo(1);
// let prueba3: comida= crearCaja(vaca);

// console.log('contenido: ' +prueba)
// console.log('contenido: ' +prueba3)
// //console.log(crearCaja<string>('diego'))
// export{}

interface ReturnEnvolver<T>{
    contenido: T;
}
function crearCaja<T>(param: T): ReturnEnvolver<T>{
    return {contenido: param};

}

console.log(crearCaja('Pepito'))
console.log(crearCaja(1))
console.log(crearCaja(vaca))