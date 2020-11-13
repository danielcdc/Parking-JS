import moment from "moment"
// Imprime por pantalla el Ticket emitido.
export function print_Ticket(ticket) {
    console.log("\nSu Ticket:\n");
    console.log("********************************");
    console.log("| Matricula: " + ticket.matricula);
    console.log("| PIN: " + ticket.pin);
    console.log(`| Plaza: ${ticket.id_plaza}`);
    console.log(`| Fecha de entrada: ${moment(ticket.fecha_deposito).format("DD-MM-YYYY")}`);
    console.log(`| Hora de entrada: ${moment(ticket.fecha_deposito).format("hh:mm")}`);
    console.log("********************************");
    // console.log(ticket);
}