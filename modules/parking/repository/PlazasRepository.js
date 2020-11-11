import { Plaza } from "../model/Plaza.js"
// Colección que guarda los objetos Vehículo cuyo atributo "tipo" sea "Turismo".
let plazas_turismo = new Array(15);

for (let index = 0; index < plazas_turismo.length; index++) {
    plazas_turismo[index] = new Plaza(index + 1, "Turismo");
}

console.log(plazas_turismo);
// Colección que guarda los objetos Vehículo cuyo atributo "tipo" sea "Motocicleta".
let plazas_motocicletas = new Array(15);

// Colección que guarda los objetos Vehículo cuyo atributo "tipo" sea "Caravana".
let plazas_caravanas = new Array(15);