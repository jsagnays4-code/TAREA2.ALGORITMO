// Dado un arreglo con nombres de cargos profesionales, obtener las iniciales de cada uno.
function obtenerInicialesCargos() {
    let cargos = ["Director General Académico", "Jefe de Laboratorio", "Asistente Administrativo"];
    let iniciales = [];
    let contador = 0; // contador opcional si quieres usarlo dentro

    for (let i = 0; i < cargos.length; i++) {
        let palabras = cargos[i].split(" "); // separar en palabras
        let inicial = "";
        contador = 0; // reiniciamos contador para cada cargo

        while (contador < palabras.length) { // usar contador como índice
            inicial = inicial + palabras[contador][0].toUpperCase() + ".";
            contador++;
        }

        iniciales.push(inicial);
        console.log('"' + cargos[i] + '" → ' + inicial);
    }

    return iniciales; // opcional
}
//llamada a la función
obtenerInicialesCargos();
