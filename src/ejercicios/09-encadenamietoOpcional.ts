export interface Pasajero{
    nombre: string;
    hijos?: string[];
}
const Pasajero1: Pasajero={
    nombre: 'Pepito',
    hijos: ['Jameiro','Feveriro']
}
const Pasajero2: Pasajero={
    nombre: 'Pepito2',
    hijos: ['Jameiro2','Feveriro2']
}

const  mostrarHijos: (Pasajero: Pasajero)=>void=(pasajero: Pasajero): void=>{
    const cantidadHijos = pasajero.hijos?.length??0;
    console.log(cantidadHijos)
}

mostrarHijos(Pasajero1);
mostrarHijos(Pasajero2);

//const valorPrueba = ""??"10";