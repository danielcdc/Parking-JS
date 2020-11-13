export function print_menu_cliente(){
    console.log("\nSeleccione una opción.");
    console.log("----------------------");
    console.log("[1] Depositar vehículo");
    console.log("[2] Retirar vehículo");
    console.log("[0] Volver al menú principal." );
}

export function print_tipo_cliente(){
    console.log("¿Es usted abonado?");
    console.log("----------------------");
    console.log("[1] No soy abonado");
    console.log("[2] Soy abonado NOT YET IMPLEMENTED");
    console.log("[0] Volver a la ventana anterior." );
}

export function print_error() {
    console.log("Valor introducido no válido. Por favor introduzca un valor válido.");
}

export function print_solicitar_pin(){
    console.log("Por favor, introduzca su PIN.");
}