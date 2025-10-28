//Invertir un nombre de producto
function invertirNombre() {
  let producto = "Laptop";
  let nombreInvertido = "";    
    for (let i = producto.length - 1; i >= 0; i--) {
        nombreInvertido += producto[i];
    } 
    console.log(nombreInvertido);
}
invertirNombre();   