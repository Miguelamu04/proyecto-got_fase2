// fase2.js
import { Arma } from "./arma.js";
import { Casa } from "./casa.js";
import { Reino } from "./reino.js";

import { Guerrero } from "./especiales/guerrero.js";
import { Consejero } from "./especiales/consejero.js";
import { Rey } from "./especiales/rey.js";

console.log("FASE 2: SANGRE Y ACERO");

// Crear armas
let garra = new Arma("Garra", 40, "espada");
let aguja = new Arma("Aguja", 25, "espada");

// Crear casas
let casaStark = new Casa("Stark", "Se acerca el invierno");
let casaLannister = new Casa("Lannister", "Oye mi rugido");

// Crear personajes
let jon = new Guerrero("Jon Snow", 25, casaStark, garra);
let arya = new Guerrero("Arya Stark", 18, casaStark, aguja);
let tyrion = new Consejero("Tyrion Lannister", 38, casaLannister, "estrategia política");
let jaime = new Rey("Jaime Lannister", 35, casaLannister, 5);

// Añadir miembros
casaStark.añadirMiembro(jon);
casaStark.añadirMiembro(arya);
casaLannister.añadirMiembro(tyrion);
casaLannister.añadirMiembro(jaime);

// Crear el Reino
let poniente = new Reino("Poniente", jaime);
poniente.agregarCasa(casaStark);
poniente.agregarCasa(casaLannister);

// Mostrar información del Reino
poniente.listarCasas();
poniente.mostrarRey();

// Probar polimorfismo: todos tienen método luchar()
console.log("\n--- Los personajes se preparan para luchar ---");
jon.luchar();
arya.luchar();
tyrion.luchar();
jaime.luchar();

// Acciones específicas
jon.entrenar();
tyrion.aconsejar();
jaime.gobernar();



