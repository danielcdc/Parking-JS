import { tarifa_estandar } from "../repository/TarifasRepository.js"
export class Plaza {
    /**
     * Representa una plaza de aparcamiento en un tipo determinado.
     * @param {number} id_plaza Entero que representa unívocamente una plaza.
     * @param {string} tipo Tipo de vehículo que puede ocupar la plaza.
     * @param {number} precio Precio por min asignado según el tipo de plaza.
     * @param {boolean} ocupada Indica si la plaza materialmente ocupada.
     * @param {Abono} abonado El abono del cliente.
     * @param {Date} fecha_ocup De estar ocupada la plaza, indica la hora de ocupación, caso contrario será null.
     * @param {Date} hora_ocup Inicialmente está a null. Al liberarse la plaza, se establece la hora de salida. 
     * Cuando se vuelve a ocupar, se establece a null nuevamente. 
     */
    constructor(id_plaza, tipo, ocupada = false, abonado = null, fecha_ocup = null, hora_ocup = null) {
        this.id_plaza = id_plaza;
        this.tipo = tipo;
        this.precio = tarifa_estandar.get(tipo);
    }
}