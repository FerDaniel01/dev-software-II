interface Comida {
    nombre: string;
    calorias: number;
    esVegana: boolean
}

const pizza: Comida = {
    nombre: "Pizza Pollo",
    calorias: 3000,
    esVegana: false
}

const ensalada: Comida = {
    nombre: "ensalada Aguacate",
    calorias: 1000,
    esVegana: true
}

export class ComidaService {
 

       public mostrarInfo(comida:Comida): void{
        const{ nombre, calorias, esVegana } = comida;

          console.log("plato "+ nombre);
          console.log(calorias);
          console.log(esVegana);
          
           
          
       }

        public modificarCalorias(comida:Comida, newCalorias: number): Comida{
           //let { nombre, calorias, esVegana } = ensalada;
           comida.calorias=newCalorias
          //console.log(nombre);
          //console.log('Las nuevas calorias del plato'+calorias);
          //console.log(esVegana);
          
           return comida
          
       }

    
}

export class NotificadorComida{

    constructor(
        public comida: ComidaService,
    ){}
     public notificar(comida: Comida){
        
        this.comida.mostrarInfo(comida);
     }
}

const servicio = new ComidaService();
const notificador = new NotificadorComida(servicio);

notificador.notificar(pizza)
servicio.modificarCalorias(pizza,50)
servicio.mostrarInfo(pizza)