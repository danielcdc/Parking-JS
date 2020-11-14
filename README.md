# Parking-JS
## Primer proyectito en JS sobre un parking robotizado.

### Diagrama UML planteado.
![img](Parking.jpg "Diagrama UML")

### Modularización del programa empleada.
![img](Estructura_de_ficheros.jpg "Estructura de ficheros")

### Indicaciones sobre el proyecto
  1) Introducir en el terminal: "npm start" para ejecutar el script principal"
  2) En las propias opciones que se muestran por consolan se describen aquellas funcionalidades que están implementadas y cuáles no.
  3) Si se desea retroceder un menú anterior, introducir por consola el número 0 pulse Enter.
  4) Los ficheros contienen sus respectivos archivos .js convenientemente documentados.

### Info sobre funcionalidades específicas 
1) La opción de retirar un vehículo de un NO abonado solicita introducir un PIN  y luego no hace nada: esto es debido a que el método 
  "buscar_ticket(pin)" del archivo TicketServicio.js no funciona adecuadamente.
2) La opción de dar de alta un abonado está implmenentada pero no funciona como debería.
3) Las funcionalidades totalmente implementadas y funcionales son: 
  a) Consultar estado del parking.
  b) Depositar vehículo de no abonado.
