//Comparar nombres de ciudades por longitud
function compararCiudades() {
    let ciudad1= "Milagro";
    let ciudad2= "Guayaquil";
    if (ciudad1.length > ciudad2.length) {
        console.log("La ciudad " + ciudad1 + "tiene mas letras que " + ciudad2 + ".");
    } else if (ciudad1.length < ciudad2.length) {
        console.log("La ciudad " + ciudad2 + " tiene mas letras que " + ciudad1 + ".");
    } else {
        console.log("Ambas ciudades tienen nombres de la misma longitud.");
    }       
}
compararCiudades();


