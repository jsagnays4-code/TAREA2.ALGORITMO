//Dada una lista de calificaciones, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
function promedioCalificacionesMayores70() {
    let calificaciones = [65, 80, 90, 50, 75];
    let suma = 0;
    let contador = 0;

    // Recorrer el arreglo
    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] >= 70) {
            suma += calificaciones[i];
            contador++;
        }
    }

    // Calcular promedio
    let promedio = 0;
    if (contador > 0) {
        promedio = suma / contador;
    }

    console.log("Promedio de calificaciones ≥ 70: " + promedio.toFixed(2));
}

// Llamar a la función
promedioCalificacionesMayores70();
