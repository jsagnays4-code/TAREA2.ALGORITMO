// Dado un arreglo de títulos y una vocal específica, contar cuántas veces aparece esa vocal en cada título.
function contarVocalEnTitulos(vocal) {
    // Arreglo con los títulos
    let titulos = ["Programación avanzada", "Desarrollo web", "Análisis de datos"];
    
    // Recorrer los títulos
    for (let i = 0; i < titulos.length; i++) {
        let contador = 0; // Reiniciar el contador para cada título

        // Recorrer cada letra del título
        for (let j = 0; j < titulos[i].length; j++) {
            if (titulos[i][j].toLowerCase() === vocal.toLowerCase()) {
                contador++;
            }
        }

        // Mostrar el resultado usando concatenación con +
        console.log('"' + titulos[i] + '" → La vocal \'' + vocal + '\' aparece ' + contador + ' veces.');
    }
}

// Llamada a la función
contarVocalEnTitulos("a");
