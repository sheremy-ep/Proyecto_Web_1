function pago() {
    var dia = document.getElementById("dia").ariaValueMax;
    var cantidad = document.getElementById("cantidad").value;
    var tipo = document.getElementById("tipoEntrada").value;
    var pagoTipo = 0;

    //validacion campos en blanco
    if (dia == "Seleccione el día" || cantidad == "" || tipo == "Seleccione su preferencia") {
        swal.fire({
            icon: "error",
            title: "Atencion usuario",
            text: "No dejar campos vacíos",
        });
    } else {
        //usamos un condicional para determinar el tipo de gradería
        if (tipo == "Gradería sur") {
            pagoTipo = 20000;
        } else if (tipo == "Gramilla") {
            pagoTipo = 35000;
        } else if (tipo == "Balcón premium") {
            pagoTipo = 70000;
        } else if (tipo == "Platea este") {
            pagoTipo = 61500;
        } else if (tipo == "Super VIP") {
            pagoTipo = 100000;
        }

        /*Calculo*/
        var monto = cantidad * pagoTipo;

        //resultado en la página web
        document.getElementById("txtResultadoMontoFinal").innerHTML = "₡" + monto;
        document.getElementById("diaE").innerHTML = " " + dia;
        document.getElementById("cant").innerHTML = " " + cantidad;
        document.getElementById("tipoE").innerHTML = " " + tipo;
    }
}
