import moment from "moment"
// Imprime por pantalla el Ticket emitido.
export function print_Ticket_entrada(ticket) {
    console.log("\nSu Ticket:\n");
    console.log("********************************");
    console.log("| Matricula: " + ticket.matricula);
    console.log("| PIN: " + ticket.pin);
    console.log(`| Plaza: ${ticket.id_plaza}`);
    console.log(`| Fecha de entrada: ${moment(ticket.fecha_deposito).format("DD-MM-YYYY")}`);
    console.log(`| Hora de entrada: ${moment(ticket.fecha_deposito).format("hh:mm")}`);
    console.log("********************************");
}

export function print_Ticket_salida(ticket){
    console.log("\nSu Ticket:\n");
    console.log("********************************");
    console.log("| Matricula: " + ticket.matricula);
    console.log("| PIN: " + ticket.pin);
    console.log(`| Plaza: ${ticket.id_plaza}`);
    console.log(`| Fecha de entrada: ${moment(ticket.fecha_deposito).format("DD-MM-YYYY")}`);
    console.log(`| Hora de entrada: ${moment(ticket.fecha_deposito).format("hh:mm")}`);
    console.log(`| Fecha de entrada: ${moment(ticket.fecha_deposito).format("DD-MM-YYYY")}`);
    console.log(`| Hora de entrada: ${moment(ticket.fecha_deposito).format("hh:mm")}`);
    console.log(`| Precio a pagar: ${ticket.facturado} €`);
    console.log("********************************");
}

export function print_devolver_vehiculo(ticket){
    console.log("PIN aceptado. Se procede a devolver su vehículo");
    console.log("No olvide recoger su Ticket.");
    print_Ticket_salida(ticket);
    console.log("Gracias por confiar en nosotros.");
}
