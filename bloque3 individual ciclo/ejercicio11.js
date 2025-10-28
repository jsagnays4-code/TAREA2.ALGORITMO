//Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
function promedioNotasMayoresIgual70() {
    // Pedir al usuario la cantidad de calificaciones
    let n = parseInt(prompt("Ingrese número de calificaciones:"));

    let notas = [];
    let suma = 0;
    let contador = 0;

    // Ciclo for para leer cada nota
    for (let i = 0; i < n; i++) {
        let nota = parseFloat(prompt("Ingrese la nota #" + (i + 1) + ":"));
        notas.push(nota);  // Guardar la nota en el arreglo

        // Acumular y contar solo las notas >= 70
        if (nota >= 70) {
            suma += nota;
            contador++;
        }
    }

    console.log("Notas: " + notas.join(", "));

    // Calcular promedio si hay notas >= 70
    let promedio = contador > 0 ? (suma / contador) : 0;

    console.log("Promedio de notas ≥ 70: " + promedio.toFixed(2));
}

// Llamar a la función
promedioNotasMayoresIgual70();
