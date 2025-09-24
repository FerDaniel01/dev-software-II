
import {type Pelicula, type Director} from './ejer01inter'

const director: Director={
    nombreDirector: 'Allan',
    especialidad: 'Terro',
    fechaNacimiento: 'Agost 19/1940'
}

export const peliculas: Pelicula= 
    {
        nombrePelicula: 'Terrorifica I',
        descripcion: 'Es una pelicula de terror',
        anio: 1980,
        director: director
    }



// export function mostrarCartelera(peliculas:Pelicula): [string, string, number, Director]{
//     const{ elNombre, descripcion, anio, director } = peliculas;
//    console.log(elNombre);
//    console.log(descripcion);
//    console.log(anio);
//    console.log(director);
//     });
//     return [elNombre,descripcion, anio, director];
// }


export function mostrarCartelera(peliculas:Pelicula): void{
    const{ nombrePelicula, descripcion, anio, director } = peliculas;
   console.log(nombrePelicula);
   console.log(descripcion);
   console.log(anio);
   console.log(director);
    
   
}
