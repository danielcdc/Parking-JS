import * as repository from "../../parking/repository/PlazasRepository.js"
import * as utils from "../../utilities/Utilities.js"
import * as readline from 'readline-sync';
import * as vista_parking from "../../parking/views/Vista_AsignarPlaza.js"

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
export function alta_abonado(){
    let dni = utils.generar_dni();
    let name = readline.question("Introduce un nombre: ");
    let apellidos = readline.question("Introduce apellidos: ");
    let numTarjeta = readline.questionInt("Introduce una tarjeta de crédito: ");
    let email = readline.questionEMail("Introduce un email de contacto: ");

}

function elegir_tipo_vehículo(){
    let salir = false;
    do{
        vista_parking.print_elegir_plaza();
        op = readline.questionInt("¿Qué tipo de vehículo dispone?");
        switch(op){

        }
    }while(!salir)
}