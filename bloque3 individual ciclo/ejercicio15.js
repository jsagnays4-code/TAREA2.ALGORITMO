//Ingresar n números y calcular el promedio de los números pares y de los números impares por separado.
function promedioParesImpares() {
    let n = Number(prompt("Ingrese la cantidad de números:"));
    let sumaPares = 0;
    let sumaImpares = 0;
    let contPares = 0;
    let contImpares = 0;

    // Leer n números
    for (let i = 1; i <= n; i++) {
        let numero = Number(prompt("Ingrese el número " + i + ":"));

        if (numero % 2 == 0) {
            sumaPares += numero;
            contPares++;
        } else {
            sumaImpares += numero;
            contImpares++;
        }
    }

    // Calcular promedios
    let promedioPares = contPares > 0 ? (sumaPares / contPares).toFixed(2) : 0;
    let promedioImpares = contImpares > 0 ? (sumaImpares / contImpares).toFixed(2) : 0;

    // Mostrar resultados
    console.log("Promedio de pares: " + promedioPares);
    console.log("Promedio de impares: " + promedioImpares);
}

// Llamar a la función
promedioParesImpares();
