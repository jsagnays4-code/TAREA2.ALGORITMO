function contarNegativos() {
    // Leer la cantidad de números a ingresar
    let n = Number(prompt("Ingrese cuántos números desea ingresar:"));

    // Inicializar arreglo y contador de negativos
    let numeros = [];
    let negativos = 0;

    // Bucle para ingresar los números
    for (let i = 0; i < n; i++) {
        let num = Number(prompt("Ingrese el número #" + (i + 1) + ":"));
        numeros.push(num);

        if (num < 0) {
            negativos++;
        }
    }

    // Mostrar los resultados
    console.log("Valores: " + numeros.join(", "));
    console.log("Cantidad de negativos: " + negativos);
}

// Llamar a la función
contarNegativos();
