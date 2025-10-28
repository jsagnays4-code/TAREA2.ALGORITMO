// Dado un arreglo con frases publicitarias, contar cuántos caracteres tiene cada una.
function mostrarCaracteres() {
    // Arreglo con las frases
    let frases = ["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"];

    // Recorrer las frases y mostrar cada una con su cantidad de caracteres
    for (let i = 0; i < frases.length; i++) {
        console.log(`"${frases[i]}" → ${frases[i].length} caracteres`);
    }
}

mostrarCaracteres();
