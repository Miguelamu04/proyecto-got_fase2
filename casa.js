export class Casa {
constructor(nombre, lema) {
this.nombre = nombre;
this.lema = lema;
this.miembros = [];
}

añadirMiembro(personaje) {
    this.miembros.push(personaje);
console.log(`${personaje.nombre} se ha unido a la Casa ${this.nombre}`);
}

listarMiembros() {
    console.log(`Miembros de la Casa ${this.nombre}:`);
    this.miembros.forEach(miembro => console.log(`${miembro.nombre}`));
}
}