import { Personaje } from "../personaje.js";

export class Consejero extends Personaje {
    constructor(nombre, edad, casa, especialidad) {
        super(nombre, edad, casa);
        this.especialidad = especialidad;
    }

    luchar() {
        console.log(`${this.nombre} no pelea, pero usa su ${this.especialidad} para ganar guerras sin derramar sangre.`);
    }

    aconsejar() {
        console.log(`${this.nombre} aconseja sabiamente a su rey usando su conocimiento en ${this.especialidad}.`);
    }
}
