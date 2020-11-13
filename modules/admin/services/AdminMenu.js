import * as vista_admin from "../../admin/views/Vista_MenuAdmin.js"
import * as readline from 'readline-sync';
import { alta_abonado, check_parking } from "./AdminService.js";

/**
 * Menú de navegación del administrador.
 */
export function menu_admin() {
    vista_admin.print_menu_admin();
    let salir = false;
    do {
        vista_admin.print_menu_admin();
        let op = Number.parseInt(readline.questionInt("Introduzca aquí su opcion y pulse Enter: \n"));
        switch (op) {
            case 1: // Comprueba el estado de las plazas del parking y las devuelve por consola.
                check_parking();
                vista_admin.print_menu_admin();
                break;
            case 2:
                break;
            case 3:
                break;
            case 4: // Despliega el menú relativo a la gestión de abonados.
                menu_abonados();
                break;
            case 0:
                salir = true;
                break;
            default:
                vista_admin.print_error();
        }
    } while (!salir)
}

/**
 * Menu que presenta las diferentes opciones disponibles para el administrador 
 * sobre la gestión de abonados. ("Zona Administrador: Abonos" del PDF)
 */
function menu_abonados() {
    let salir = false;
    do {
        vista_admin.print_menu_abonados();
        let op1 = Number.parseInt(readline.questionInt("Introduzca aquí su opcion y pulse Enter: \n"));
        switch (op1) {
            case 1: // Alta
                alta_abonado();
                break;
            case 2: // Modificacion
                break;
            case 3: // Baja
                break;
            case 4: // Mes
                break;
            case 5: // Consultar últimos 10 días
                break;
            case 0:
                salir = true;
                break;
            default:
                vista_admin.print_error();
        }
    } while (!salir)
}