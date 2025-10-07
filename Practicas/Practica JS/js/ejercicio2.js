// declaracion de variables

let valor1 = 100;
let valor2 = 600;
let valor3 = 300;

let r1 = document.getElementById("resultado1");
let r2 = document.getElementById("resultado2");
let r4;

//calculo que sume 3 variables y brinde el resultado por pagina y consola

//calculo
r1 = valor1 + valor2 + valor3;

//pag web
document.getElementById("resultado1").innerHTML = r1;

//consola
console.log(r1);


//calculo que multiplique 3 valores y los divida entre 3. brinde el resultado por pag y consola

//calculo
r2 = (valor1 * valor2 * valor3) / 3;

//pag web
document.getElementById("resultado2").innerHTML = r2;

//consola
console.log(r2);


//calculo que reste 2 valores y que brinde el resultado por pag y consola

//calculo
r3 = (valor2 - valor3);

//pag web
document.getElementById("resultado3").innerHTML = r3;

//consola 
console.log(r4)
