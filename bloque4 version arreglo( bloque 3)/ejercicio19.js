//Dada una lista de números, mostrar la tabla de multiplicar del 1 al 10 para cada uno.
function mostrarTablasMultiplicar() {
    let numeros = [3, 5];

    // Recorrer cada número de la lista
    for (let i = 0; i < numeros.length; i++) {
        let tabla = [];
        let num = numeros[i];

        // Ciclo interno para multiplicar del 1 al 10
        for (let j = 1; j <= 10; j++) {
            tabla.push(num * j);
        }

        console.log("Tabla del " + num + ":");
        console.log(tabla.join(", "));
        console.log(""); // Línea en blanco para separar tablas
    }
}

// Llamar a la función
mostrarTablasMultiplicar();
