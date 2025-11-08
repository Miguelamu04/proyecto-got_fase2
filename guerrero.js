import { Personaje } from "../personaje.js";

export class Guerrero extends Personaje {
    constructor(nombre, edad, casa, arma) {
    super(nombre, edad, casa);
    this.arma = arma;
    }

    luchar() {
        console.log(`${this.nombre} lucha valientemente con su ${this.arma.nombre}.`);
    }

    entrenar() {
        console.log(`${this.nombre} está entrenando con su ${this.arma.nombre}.`);
    }
}
