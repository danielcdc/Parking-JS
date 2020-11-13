import * as repository from "../../parking/repository/PlazasRepository.js"
import * as tarifas from "../../parking/repository/TarifasRepository.js"
import * as utils from "../../utilities/Utilities.js"
import * as readline from 'readline-sync';
import * as vista_parking from "../../parking/views/Vista_AsignarPlaza.js"
import { print_tipos_abonos } from "../views/Vista_MenuAbonos.js"
// import { Abono } from "../model/Abono.js"
// import { Cliente } from "../../cliente/model/Cliente.js"

/**
 * Comprueba el estado del parking.
 */
export function check_parking() {
    repository.plazas_turismo.forEach(element => {
        estado_plaza(element);
    });
    repository.plazas_motocicletas.forEach(element => {
        estado_plaza(element);
    });
    repository.plazas_caravanas.forEach(element => {
        estado_plaza(element);
    });

}

/**
 * Comprueba el atributo "ocupado" y "abono" de un objeto Plaza e informa
 * del estado de este por consola al administrador.
 * @param {Plaza} plaza 
 */
function estado_plaza(plaza) {
    if (!plaza.ocupada) {
        if (plaza.abono == null) {
            console.log(`Plaza [${plaza.id_plaza}]: LIBRE`);
        } else {
            console.log(`Plaza [${plaza.id_plaza}]: RESERVADA`);
        }
    }
    if (plaza.ocupada) {
        if (plaza.abono != null) {
            console.log(`Plaza [${plaza.id_plaza}]: OCUPADA/ABONADO.`);
        } else {
            console.log(`Plaza [${plaza.id_plaza}]: OCUPADA`);
        }
    }

}
/**
 * Dar de alta a un cliente abonado.
 */
export function alta_abonado() {
    let tipo = elegir_tipo_vehículo();
    console.log(tipo);
    if (tipo = !undefined) {
        let plaza_ocupada = asignar_plaza_abonado(tipo);
        let tarifa_elegida = elegir_tipo_abono();
        let dni = utils.generar_dni();
        let name = readline.question("Introduce un nombre: ");
        let apellidos = readline.question("Introduce apellidos: ");
        let numTarjeta = readline.questionInt("Introduce una tarjeta de crédito: ");
        let email = readline.questionEMail("Introduce un email de contacto: ");
    }

}

function elegir_tipo_vehículo() {
    let salir = false;
    do {
        vista_parking.print_elegir_plaza();
        let op = readline.questionInt("Introduzca la opción deseada y pulse Enter: ");
        switch (op) {
            case 1:
                return "Turismo";
            case 2:
                return "Motocicleta";
            case 3:
                return "Caravana"
            case 0:
                break;
            default:
                vista_parking.print_error();
        }
    } while (!salir)
}

/**
 * Comprueba si hay una plaza disponible para reservarse a un usuario ABONADO.
 * Solo podrán reservarse aquellas plazas que que esten LIBRES (sin ocupar y sin reservar).
 * @param {string} tipo Tipo de vehículo.
 */
function asignar_plaza_abonado(tipo) {
    let plaza_libre = false;
    if (tipo === "Turismo") {
        for (let index = 0; index < repository.plazas_turismo.length; index++) {
            if (!repository.plazas_turismo[index].ocupada && repository.plazas_turismo[index].abono == null) {
                plaza_libre = true;
                repository.plazas_turismo[index].ocupada = true;
                return repository.plazas_turismo[index].id_plaza;
            }

        }
    }
    if (tipo === "Motocicleta") {
        for (let index = 0; index < repository.plazas_motocicletas.length; index++) {
            if (!repository.plazas_motocicletas[index].ocupada && repository.plazas_motocicletas[index].abono == null) {
                plaza_libre = true;
                repository.plazas_motocicletas[index].ocupada = true;
                return repository.plazas_motocicletas[index].id_plaza;
            }

        }
    }
    if (tipo === "Caravana") {
        for (let index = 0; index < repository.plazas_caravanas.length; index++) {
            if (!repository.plazas_caravanas[index].ocupada && repository.plazas_caravanas[index].abono == null) {
                plaza_libre = true;
                repository.plazas_caravanas[index].ocupada = true;
                return repository.plazas_caravanas[index].id_plaza;
            }

        }
    }
    if (!plaza_libre) {
        vista_parking.print_sin_plazas();
    }
}

function elegir_tipo_abono() {
    print_tipos_abonos();
    let salir = false;
    do {
        let op = readline.questionInt("Introduzca una opción entre las disponibles y pulse Enter: ");
        switch (op) {
            case 1:
                return tarifas.tarifa_abonados[op - 1];
            case 2:
                return tarifas.tarifa_abonados[op - 1];
            case 3:
                return tarifas.tarifa_abonados[op - 1];
            case 4:
                return tarifas.tarifa_abonados[op - 1];
            case 0:
                salir = true;
                break;
            default:
                vista_parking.print_error();
        }

    } while (!salir)
}