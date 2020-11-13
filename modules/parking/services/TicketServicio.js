import { Ticket } from "../model/Ticket.js"
import { tickets_generados } from "../repository/TicketRepository.js"
import { print_Ticket } from "../views/Vista_Ticket.js"

/**
 * Genera un nuevo ticket al usuario no abonado y guarda el nuevo ticket
 * en una colección.
 * @param {Plaza} plaza Plaza ocupada por el vehículo.
 */
export function generar_ticket(plaza) {
    let nuevo_ticket = new Ticket(plaza);
    tickets_generados.push(nuevo_ticket);
    print_Ticket(nuevo_ticket);
}