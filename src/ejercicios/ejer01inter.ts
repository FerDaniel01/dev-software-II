export interface Director{
    nombreDirector: string;
    especialidad: string;
    fechaNacimiento: string;



}

export interface Pelicula  {
    nombrePelicula: string; 
    descripcion: string;
    anio: number;
    director: Director
}