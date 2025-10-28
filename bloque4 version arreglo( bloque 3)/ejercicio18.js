//Dada una lista con edades de personas, obtener el promedio de los mayores de edad (≥ 18) y de los menores de edad (< 18).
function promedioEdades() {
    let edades = [17, 20, 35, 15, 18];
    let sumaMayores = 0;
    let sumaMenores = 0;
    let contMayores = 0;
    let contMenores = 0;

    // Recorrer la lista
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            sumaMayores += edades[i];
            contMayores++;
        } else {
            sumaMenores += edades[i];
            contMenores++;
        }
    }

    // Calcular promedios
    let promedioMayores = 0;
    let promedioMenores = 0;

    if (contMayores > 0) {
        promedioMayores = sumaMayores / contMayores;
    }

    if (contMenores > 0) {
        promedioMenores = sumaMenores / contMenores;
    }

    console.log("Promedio de mayores de edad: " + promedioMayores.toFixed(2));
    console.log("Promedio de menores de edad: " + promedioMenores.toFixed(2));
}

// Llamar a la función
promedioEdades();
