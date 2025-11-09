window.onload = function() {
  document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";
};

//evento que permite cambiar el objeto onchange
document.getElementById("stadium").onchange = function(e) {

    //destino del valor seleccionado por el usuario
    let n = e.target.value;

    //expresiones que guardan las imagenes de los estadios y la informacion de cada uno...
    let imagen = "<img src='img/combo/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='estadio' />";
    let text = [
        "Ciudad: Al Rayyan - Capacidad: 60.000 espectadores",
        "Ciudad: Al Khor City - Capacidad: 60.000 espectadores",
        "Ciudad: Al Wakrah - Capacidad: 40.000 espectadores",
        "Ciudad: Al Doha - Capacidad: 40.000 espectadores",
        "Ciudad: Al Rayyan - Capacidad: 45.416 espectadores",
        "Ciudad: Al Doha - Capacidad: 80.000 espectadores",
        "Ciudad: Al Doha - Capacidad: 40.000 espectadores"
    ];

    //salida de las imagenes y los textos informativos...
    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n - 1];
};