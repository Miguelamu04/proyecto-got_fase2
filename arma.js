export class Arma {
constructor(nombre, danio, tipo) {
    this.nombre = nombre;
    this.danio = danio;
    this.tipo = tipo;
}

descripcion() {
    console.log(`Arma: ${this.nombre} | Daño: ${this.danio} | Tipo: ${this.tipo}`);
}
}
