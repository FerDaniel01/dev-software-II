import {type Producto, calcularImpuesto} from './04-desestructurador'

const carrito: Producto[]= [
    {
        descripcion: 'carro',
        precio: 1020
    },
     {
        descripcion: 'Celular',
        precio: 1200
    },

]

const [total, totalImpuesto]= calcularImpuesto({
    impuesto: 100,
    productos: carrito,
    propina: 0

})
console.log({total, totalImpuesto});


/*Crear un archivo con 2 interfaces, otro archivo con una funcion que reciba un objeto de tipo interfaz y retorne un string con un dato del objeto y otro archivo que haga el llamado de la funcion*/ 