/// Dado un arreglo con nombres de ciudades, identificar cuál tiene más letras.
function compararLongitudesCiudades() {
    let ciudades = ["Milagro", "Guayaquil", "Quito", "Cuenca"];
    let ciudadMasLarga = "";
    let Longitud = 0;

    for (let i = 0; i < ciudades.length; i++) {
        if (ciudades[i].length > Longitud) {
            Longitud = ciudades[i].length;
            ciudadMasLarga = ciudades[i];
        }
    }

    console.log("La ciudad con más letras es '" + ciudadMasLarga + "' (" + Longitud + " letras).");
}

// Llamada a la función
compararLongitudesCiudades();
