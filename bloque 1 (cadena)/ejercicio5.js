//Obtener iniciales de un cargo profesional
function obtenerIniciales() {
    let cargo = "Director General Académico";
    let iniciales = "";
    let palabras = cargo.split(" ");    
    for (let i = 0; i <  palabras.length; i++) {
        iniciales += palabras[i][0].toUpperCase()+".";
    }
    console.log(iniciales);
}
obtenerIniciales();