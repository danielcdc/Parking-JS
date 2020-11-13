import * as vista_cliente from "../views/Vista_MenuCliente.js"
import * as readline from 'readline-sync';
import * as cliente_service from "../service/ClienteService.js"
import * as parking_service from "../../parking/services/ParkingService.js"

export function menu_cliente(){
    let salir1 = false;
    do{
        vista_cliente.print_menu_cliente();
        let op = Number.parseInt(readline.questionInt("Introduzca aquí su opcion y pulse Enter: \n"));
        switch(op){
            case 1: // Depositar vehículo
                parking_service.menu_elegir_plaza();
                break;
            case 2: // Retirar vehículo
                cliente_service.retirar_vehiculo();
                salir1 = true;
                break;
            case 0:
                salir1 = true;
                break;
            default:
                vista_cliente.print_error();
        }
    }while(!salir1)
}

