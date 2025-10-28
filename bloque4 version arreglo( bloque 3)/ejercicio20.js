//Dada una lista de números, calcular el promedio de los pares y de los impares.
function promedioParesImpares() {
    let numeros = [2, 5, 8, 9, 4, 7];
    let sumaPares = 0;
    let sumaImpares = 0;
    let contPares = 0;
    let contImpares = 0;

    // Recorrer la lista de números en un for 
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            sumaPares += numeros[i];
            contPares++;
        } else {
            sumaImpares += numeros[i];
            contImpares++;
        }
    }

    //calcular los promedio
    let promedioPares = contPares > 0 ? (sumaPares / contPares).toFixed(2) : 0;
    let promedioImpares = contImpares > 0 ? (sumaImpares / contImpares).toFixed(2) : 0;

    console.log("Promedio de pares: " + promedioPares);
    console.log("Promedio de impares: " + promedioImpares);
}

// Llamar a la función para la finalidad de la prueba
promedioParesImpares();
