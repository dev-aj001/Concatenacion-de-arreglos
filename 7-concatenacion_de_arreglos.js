// Concatenación de arreglos:
// Crea dos arreglos de strings y luego concatenarlos en un solo arreglo

const readline = require('readline');

// Interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arreglos a concatenar
const arreglo1 = ["manzana", "platano", "cereza"];
const arreglo2 = ["durazno", "mango", "kiwi"];

// Operacion de concatenado a un solo arreglo
const arregloConcatenado = arreglo1.concat(arreglo2);

// Muestra el resultado
console.log("Arreglo concatenado:", arregloConcatenado);

