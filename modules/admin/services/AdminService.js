import * as repository from "../../parking/repository/PlazasRepository.js"

// import { Plaza } from "../../parking/model/Plaza.js"
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