// Contar apariciones de una vocal en un título
function contarVocal() {
  let titulo = "Programación avanzada";
  //          012345678910111213141516171819
  let vocal = "a";
  let contador = 0;

  for (let i = 0; i < titulo.length; i++) {
    if (titulo[i].toLowerCase() === vocal) {
      contador++;
    }
  }

  console.log("La vocal " + vocal + " aparece " + contador + " veces.");
}

contarVocal();
