import { plazas_caravanas, plazas_motocicletas, plazas_turismo } from "../repository/PlazasRepository.js"
import * as vistas from "../views/Vista_AsignarPlaza.js"
import * as readline from 'readline-sync';
import * as expendora from "../services/TicketServicio.js";

/**
 * Menú para los usuarios no abonados. Introduce por teclado una opción de 
 */
export function menu_elegir_plaza() {
    vistas.print_elegir_plaza();
    let salir = false;
    do {
        let op = Number.parseInt(readline.questionInt("Introduzca aquí su opcion y pulse Enter: \n"));
        switch (op) {
            case 1:
                let resultado = asignar_plaza_libre("Turismo");
                if (resultado != undefined) {
                    expendora.generar_ticket(resultado);
                }
                salir = true;
                break;
            case 2:
                let resultado1 = asignar_plaza_libre("Motocicleta");
                if (resultado1 != undefined) {
                    expendora.generar_ticket(resultado1);
                }
                salir = true;
                break;
            case 3:
                let resultado2 = asignar_plaza_libre("Caravana");
                if (resultado2 != undefined) {
                    expendora.generar_ticket(resultado2);
                }
                salir = true;
                break;
            case 0:
                salir = true;
                break;
            default:
                vistas.print_error();
        }
    } while (!salir);

}
/**
 * Comprueba si existe un plaza libre disponible y se la asigna a un cliente NO abonado.
 * @param {string} tipo Tipo de vehículo a depositar.
 */
export function asignar_plaza_libre(tipo) {
    let plaza_libre = false;
    if (tipo === "Turismo") {
        for (let index = 0; index < plazas_turismo.length; index++) {
            if (!plazas_turismo[index].ocupada && plazas_turismo[index].abono == null) {
                plaza_libre = true;
                vistas.print_plaza_asginada(plazas_turismo[index].id_plaza);
                plazas_turismo[index].ocupada = true;
                return plazas_turismo[index].id_plaza;
            }

        }
    }
    if (tipo === "Motocicleta") {
        for (let index = 0; index < plazas_motocicletas.length; index++) {
            if (!plazas_motocicletas[index].ocupada && plazas_motocicletas[index].abono == null) {
                plaza_libre = true;
                vistas.print_plaza_asginada(plazas_motocicletas[index].id_plaza);
                plazas_motocicletas[index].ocupada = true;
                return plazas_motocicletas[index].id_plaza;
            }

        }
    }
    if (tipo === "Caravana") {
        for (let index = 0; index < plazas_caravanas.length; index++) {
            if (!plazas_caravanas[index].ocupada && plazas_caravanas[index].abono == null) {
                plaza_libre = true;
                vistas.print_plaza_asginada(plazas_caravanas[index].id_plaza);
                plazas_caravanas[index].ocupada = true;
                return plazas_caravanas[index].id_plaza;
            }

        }
    }
    if (!plaza_libre) {
        vistas.print_sin_plazas();
    }
}