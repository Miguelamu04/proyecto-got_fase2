import { Personaje } from "../personaje.js";

export class Rey extends Personaje {
    constructor(nombre, edad, casa, aniosReinado) {
        super(nombre, edad, casa);
        this.aniosReinado = aniosReinado;
    }

    luchar() {
        console.log(`${this.nombre} lucha por proteger su trono y su reino. 👑`);
    }

    gobernar() {
        console.log(`${this.nombre} gobierna los Siete Reinos desde el Trono de Hierro desde hace ${this.aniosReinado} años.`);
    }
}
