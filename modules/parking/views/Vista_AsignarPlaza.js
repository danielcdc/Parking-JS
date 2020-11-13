export function print_elegir_plaza() {
    console.log("¿Qué tipo de vehículo desea aparcar?");
    console.log("[1] Turismo");
    console.log("[2] Motocicleta");
    console.log("[3] Caravana");
    console.log("[0] Volver\n");
}

export function print_plaza_asginada(plaza) {
    console.log(`Se le ha asignado la plaza ${plaza} a su vehículo.`);
    console.log("Su matrícula se fotografía automáticamente, no es neceario que la introduzca.")
    console.log("Puede dejar su vehículo en la plataforma de carga y bajarse.")
    console.log("No se olvide de recoger su Ticket, lo necesitará para retirar su vehículo.");
    console.log("Gracias por confiar en nosotros.\n");
}

export function print_sin_plazas() {
    console.log("Lo sentimos, no hay plazas disponibles para su vehículo.")
}

export function print_error() {
    console.log("Valor introducido no válido. Por favor introduzca un valor válido.");
}