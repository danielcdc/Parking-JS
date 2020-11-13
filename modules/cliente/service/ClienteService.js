import * as ticket_servicio from "../../parking/services/TicketServicio.js"
import * as vista_ticket from "../../parking/views/Vista_Ticket.js"
import * as vista_cliente from "../views/Vista_MenuCliente.js"
import * as readline from 'readline-sync';

export function retirar_vehiculo(){
    let salir = false;
    do{
        vista_cliente.print_tipo_cliente();
        let op = Number.parseInt(readline.questionInt("Introduzca aquí su opcion y pulse Enter: \n"));
        switch(op){
            case 1: // No abonados.
                vista_cliente.print_solicitar_pin();
                let pin = Number.parseInt(readline.questionInt("Introduzca aquí su opcion y pulse Enter: \n"));
                let ticket = ticket_servicio.buscar_ticket(pin);
                if(ticket != null){
                    vista_ticket.print_devolver_vehiculo(ticket);
                }else{

                }
                break;
            case 2: // Abonados.
                break;
            case 0:
                salir = true;
                break;
            default:
            vista_cliente.print_error();
        }

    }while(!salir)  
}