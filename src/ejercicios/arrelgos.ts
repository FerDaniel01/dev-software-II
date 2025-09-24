let arrglo :( string | number | boolean)[] = ['pepito', 'casa', 3]
let caracteristicas: string[] = ['Alto', 'int']
interface PersonaInterface{
    edad: number; 
    nombre: string;
    caracteristicas?: string[]; // la propiedad puede o no venir con el signo de ?
}
const  persona: PersonaInterface = {
    nombre: 'Pepito',
    edad: 10,
    
}
console.log(persona)
export {};