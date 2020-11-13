import * as readline from 'readline-sync';
import * as vista_menu from "../views/Vista_MenuPpal.js"
import * as admin from "../../admin/services/AdminMenu.js"

/**
 * Método principal que inicia la aplicación. 
 * En su diferentes menús redirige hacia otros menús.
 */
export function launcher() {
    let session = true;
    do {
        vista_menu.print_menu();
        let op = Number.parseInt(readline.questionInt("Introduzca aquí su opcion y pulse Enter: \n"));
        switch (op) {
            case 1:
                break;
            case 2:
                console.log("EN OBRAS ⚠");
                break;
            case 3:
                admin.menu_admin();
                break;
            case 0:
                session = false;
                vista_menu.despedida()
                break;
            default:
                vistas.print_error();
        }
    } while (session)
}