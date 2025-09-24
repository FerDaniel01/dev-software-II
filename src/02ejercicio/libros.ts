interface Libro {
    titulo: string;
    autor?: {
        nombre?: string;
        pais?: string
    }
    anioPublicacion?: number
}

function mostrarLibro(libro:Libro):void{ 
    const miTitulo= libro.titulo;
    const miAutor= libro.autor?.nombre?.length ?? 'Desconocido';
    const pais= libro.autor?.pais?.length ?? 'Desconocido';
    const anioPublicacion= libro.anioPublicacion?? 'Desconocido';
    console.log('titulo '+ miTitulo)
    console.log('miAutor '+ miAutor)
    console.log('pais '+ pais)
     console.log('anioPublicacion '+ anioPublicacion)
}

const libro1:Libro={
    titulo: ""
}

const libro2:Libro={
    titulo: "gabriel Garcia"
}

const libro3:Libro={
    titulo: ""
}
mostrarLibro(libro1)
mostrarLibro(libro2)
mostrarLibro(libro3)