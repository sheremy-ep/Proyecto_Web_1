function random() {
    //funcion que permite sacar numeros aleatorios...
    let numero = 0;
    //toFixed es un metodo que convierte un numero a una cadena sin decimales
    numero = Math.random() * 100;
    document.resultado.rand.value = numero.toFixed(0);
}

function borrar() {
    aleatorio.value = "";
}
