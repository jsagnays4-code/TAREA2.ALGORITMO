//Dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
function promedioMayoresMenores() {
    let n = Number(prompt("Ingrese número de personas:"));
    
    let sumaMayores = 0, sumaMenores = 0;
    let contadorMayores = 0, contadorMenores = 0;
    let edades = [];

    for (let i = 0; i < n; i++) {
        let edad = Number(prompt("Ingrese la edad de la persona #" + (i + 1) + ":"));
        edades.push(edad);

        if (edad >= 18) {
            sumaMayores += edad;
            contadorMayores++;
        } else {
            sumaMenores += edad;
            contadorMenores++;
        }
    }

    let promedioMayores = contadorMayores > 0 ? (sumaMayores / contadorMayores).toFixed(2) : 0;
    let promedioMenores = contadorMenores > 0 ? (sumaMenores / contadorMenores).toFixed(2) : 0;

    console.log("Edades ingresadas: " + edades.join(", "));
    console.log("Promedio de mayores de edad: " + promedioMayores);
    console.log("Promedio de menores de edad: " + promedioMenores);
}

// Llamar a la función
promedioMayoresMenores();
