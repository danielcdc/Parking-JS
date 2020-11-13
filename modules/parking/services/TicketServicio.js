import { Ticket } from "../model/Ticket.js"
import { tickets_generados } from "../repository/TicketRepository.js"
import * as vista_ticket from "../views/Vista_Ticket.js"
import * as vista_cliente from "../../cliente/views/Vista_MenuCliente.js"

/**
 * Genera un nuevo ticket al usuario no abonado y guarda el nuevo ticket
 * en una colección.
 * @param {Plaza} plaza Plaza ocupada por el vehículo.
 */
export function generar_ticket(plaza) {
    let nuevo_ticket = new Ticket(plaza);
    tickets_generados.push(nuevo_ticket);
    vista_ticket.print_Ticket_entrada(nuevo_ticket);
}

/**
 * Busca en la colección de tickets el ticket asociado al pin introducido.
 * Devuelve el ticket asociado si lo encuentra, null en caso contrario.
 * @param {number} pin 
 */
export function buscar_ticket(pin){
    vista_cliente.print_solicitar_pin();
    let ticket = null;
    for (let index = 0; index < tickets_generados.length; index++) {
        if(pin === Ticket.pin){
            ticket = tickets_generados[index];
        }   
    }
    return ticket;
}

/**
 * Halla el precio a pagar por el servicio de aparcamiento a un no abonado, 
 * según el tiempo que haya transcurrido.
 * Actualiza el ticket con el precio facturado.
 * @param {Ticket} ticket 
 */
export function facturar_ticket(ticket){

}