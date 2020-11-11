// Colección de las tarifas aplicables a clientes abonados.
const tarifa_abonados = new Map();
tarifa_abonados.set("mensual", 25);
tarifa_abonados.set("trimestral", 70);
tarifa_abonados.set("semestral", 130);
tarifa_abonados.set("anual", 200);

// Colección de tarifas aplicables a clientes no abonados.
// Cada valor del mapa representa el precio en €/min.
const tarifa_estandar = new Map();
tarifa_estandar.set("Turismo", 0.12);
tarifa_estandar.set("Motocicleta", 0.08);
tarifa_estandar.set("Caravana", 0.45);

export { tarifa_abonados, tarifa_estandar }