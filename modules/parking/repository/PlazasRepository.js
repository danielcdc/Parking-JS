import { Plaza } from "../model/Plaza.js"


// Colección que guarda los objetos Vehículo cuyo atributo "tipo" sea "Turismo".
export let plazas_turismo = new Array(15);

for (let index = 0; index < plazas_turismo.length; index++) {
    plazas_turismo[index] = new Plaza(index + 1, "Turismo");
}

// Colección que guarda los objetos Vehículo cuyo atributo "tipo" sea "Motocicleta".
export let plazas_motocicletas = new Array(15);

for (let index = 0; index < plazas_motocicletas.length; index++) {
    plazas_motocicletas[index] = new Plaza(index + 16, "Motocicleta");
}
// Colección que guarda los objetos Vehículo cuyo atributo "tipo" sea "Caravana".
export let plazas_caravanas = new Array(15);

for (let index = 0; index < plazas_caravanas.length; index++) {
    plazas_caravanas[index] = new Plaza(index + 31, "Caravana");
}

// Instancia de un parking con 3 colecciones de plazas, una por cada tipo.
// Esta instancia será utilizada por un Administrador para gestionar las plazas.
// export let parking = new Parking(plazas_turismo, plazas_motocicletas, plazas_caravanas);

// Comprueba que se rellenan los arrays.
/* console.log(plazas_turismo);
console.log(plazas_motocicletas);
console.log(plazas_caravanas); */