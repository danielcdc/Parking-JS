export function print_menu_admin() {
    console.log("\n--------------------------");
    console.log("Opciones de Administrador");
    console.log("--------------------------\n");
    console.log("[1] Consultar estado del parking.");
    console.log("[2] Consultar la facturación del parking NOT IMPLEMENTED YET");
    console.log("[3] Consultar abonados anuales NOT IMPLEMENTED YET");
    console.log("[4] Gestionar Abonos NOT IMPLEMENTED YET")
    console.log("[0] Volver al menú principal.\n");
}

export function print_error() {
    console.log("Valor introducido no válido. Por favor introduzca un valor válido.");
}

export function print_menu_abonados(){
    console.log("[1] Dar de alta un Abonado -> NOT IMPLEMENTED YET");
    console.log("[2] Modificar un Abonado -> NOT IMPLEMENTED YET");
    console.log("[3] Dar de baja un Abonado -> NOT IMPLEMENTED YET");
    console.log("[4] Gestionar Abonos -> NOT IMPLEMENTED YET")
    console.log("[5] Consultar últimos 10 días -> NOT IMPLEMENTED YET")
    console.log("[0] Volver al menú principal.\n");
}