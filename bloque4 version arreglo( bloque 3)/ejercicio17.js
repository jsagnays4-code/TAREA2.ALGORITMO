//Dada una lista de números, contar cuántos son negativos.
function contarNumerosNegativos() {
    let numeros = [3, -5, 0, 7, -1, -8];
    let contadorNegativos = 0;

    // Recorrer la lista
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            contadorNegativos++;
        }
    }

    console.log("Cantidad de números negativos: " + contadorNegativos);
}

// Llamar a la función
contarNumerosNegativos();
