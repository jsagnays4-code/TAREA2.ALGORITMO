//Dado un solo número, mostrar su tabla de multiplicar del 1 al 10.
function mostrarTablaMultiplicar() {
    // Pedir al usuario el número
    let numero = Number(prompt("Ingrese un número:"));

    console.log("Tabla del " + numero + ":");

    // Bucle para multiplicar del 1 al 10
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " × " + i + " = " + (numero * i));
    }
}

// Llamar a la función
mostrarTablaMultiplicar();
