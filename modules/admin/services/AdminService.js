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
            console.log(`La plaza ${plaza.id_plaza} esta libre.`);
        } else {
            console.log(`La plaza ${plaza.id_plaza} esta libre pero reservada.`);
        }
    }
    if (plaza.ocupada) {
        if (plaza.abono != null) {
            console.log(`La plaza ${plaza.id_plaza} esta ocupada por un abonado.`);
        } else {
            console.log(`La plaza ${plaza.id_plaza} esta ocupada.`);
        }
    }

}