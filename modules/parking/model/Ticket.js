import * as utils from "../../utilities/Utilities.js"
import moment from "moment"

export class Ticket {

    constructor(id_plaza) {
        this.matricula = utils.generar_matricula();
        this.id_plaza = id_plaza;
        this.pin = utils.generar_pin(); // Se generará automaticamente con una función.
        this.fecha_deposito = moment().format();
        this.fecha_salida = null;
        this.facturado = null;
    }
}