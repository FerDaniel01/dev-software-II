/*{
    status: boolean;
    message: string;
    statusCode: number;
    result: [estados]
}

usuario ={
    nombre: string;
    apellido: string;
    edad: number;

}

estados ={
    tipo:  string
}*/


function verTipo<T>(argument: T): T{
    return argument;
}

interface Mamiferos{
    tipo: string;
    genero: string;
    edad: number;


}

const vaca:  Mamiferos={
    tipo: "Prueba",
    genero: "aaaa",
    edad: 1
}

let prueba: string= verTipo("Pepito");
let prueba1: boolean= verTipo(true);
let prueba2: number= verTipo(1);
let prueba3: Mamiferos= verTipo(vaca);

console.log(prueba.toUpperCase())
console.log(prueba1)
console.log(prueba2)
console.log(prueba3)
export{}