import * as vista_admin from "../../admin/views/Vista_MenuAdmin.js"
import * as readline from 'readline-sync';
import { check_parking } from "./AdminService.js";

export function menu_admin() {
    vista_admin.print_menu_admin();
    let salir = false;
    do {
        let op1 = Number.parseInt(readline.questionInt("Introduzca aquí su opcion y pulse Enter: \n"));
        switch (op1) {
            case 1:
                check_parking();
                return vista_admin.print_menu_admin();
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 0:
                salir = true;
                break;
            default:
                vista_admin.print_error();
        }
    } while (!salir)
}