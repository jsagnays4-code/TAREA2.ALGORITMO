//Dado un arreglo con nombres de productos, mostrar cada uno invertido.
function invertirNombresProductos() {
    // Arreglo con los nombres de los productos
    let productos = ["Laptop", "Celular","Tablet"];
    // Recorrer los nombres de los productos
    for (let i = 0; i < productos.length; i++) {
        let nombreInvertido = ""; // Variable para almacenar el nombre invertido

        // Recorrer el nombre del producto al revés
        for (let j = productos[i].length - 1; j >= 0; j--) {
            nombreInvertido += productos[i][j];
        }       
        // Mostrar el nombre original y el invertido
        console.log('"' + productos[i] + '" → "' + nombreInvertido + '"');  
    }
}
invertirNombresProductos();