export class Reino {
constructor(nombre, rey = null) {
this.nombre = nombre;
this.casas = [];
this.rey = rey;
}

agregarCasa(casa) {
this.casas.push(casa);
console.log(`La Casa ${casa.nombre} ha sido añadida al Reino de ${this.nombre}`);
}

listarCasas() {
console.log(`Casas del Reino de ${this.nombre}:`);
this.casas.forEach(casa => console.log(`${casa.nombre} (${casa.lema})`));
}

mostrarRey() {
if (this.rey) {
console.log(`El rey del Reino de ${this.nombre} es ${this.rey.nombre} de la Casa ${this.rey.casa.nombre}`);
} else {
console.log(`El Reino de ${this.nombre} aún no tiene rey.`);
}
}
}