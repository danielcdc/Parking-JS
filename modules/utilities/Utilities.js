/**
 * Genera un número aleatorio de 6 cifras.
 */
export function generar_pin() {

    return Math.floor((Math.random() * Math.pow(10, 6)));
}

/**
 * Genera una matrícula española, de tipo europea 1234-ABC.
 */
export function generar_matricula() {
    let matricula = "";
    let lista_matricula = new Array(8);
    for (let index = 0; index < 4; index++) {
        lista_matricula[index] = (num_aleatorio(0, 9).toString());
    }
    lista_matricula[4] = "-";
    for (let index = 5; index < lista_matricula.length; index++) {
        lista_matricula[index] = String.fromCharCode(num_aleatorio(65, 90));
    }
    //console.log(lista_matricula); // Testeo
    for (let index = 0; index < lista_matricula.length; index++) {
        matricula += lista_matricula[index];
    }
    //console.log(matricula); // Testeo
    return matricula;
}

/**
 * Devuelve un número aleatorio de un intervalo [min, max].
 * @param {number} min Valor mínimo.
 * @param {number} max Valor máximo.
 */
function num_aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function charDNI(dni) {
    var chain = "TRWAGMYFPDXBNJZSQVHLCKET";
    var pos = dni % 23;
    var letter = chain.substring(pos, pos + 1);
    return letter;
}

export function generar_dni() {
    let num = Math.floor((Math.random() * 100000000));
    let sNum = formatNumberLength(num, 8);
    return sNum + charDNI(sNum);
}