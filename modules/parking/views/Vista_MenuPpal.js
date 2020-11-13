export function print_menu() {

    console.log("\n******Bienvenido a Parking-DAM******");
    console.log("-------------------------------------");
    console.log("Seleccione una opción:\n");
    console.log("[1] Depositar vehículo");
    console.log("[2] Retirar vehículo");
    console.log("[3] Soy Administrador --> ¿Eres Luismi? ¡Selecciona esta opción!");
    console.log("[0] Salir\n");
}

export function despedida() {
    console.log("Gracias por utilizar nuestra aplicación. Adiós");
}

export function print_error() {
    console.log("Valor introducido no válido. Por favor introduzca un valor válido.");
}