/*
estructura BUCLE FOR

for (desde; hasta; actualizacion){
    codigo a repetir
}

i++ o i= i+1
*/

for (let i = 1; i <= 100; i++) { 
    console.log(i);
}

let numero = parseInt(prompt("ingrese un nro"));

for (let i = 1; i <= 2; i++) { 
    let resultado = numero * i; //si declaro una variable dentro de un bucle esta es local, no se accede fuera de ella
    alert(`${numero} * ${i} = ${resultado}`);
    //console.log(numero*i);
}
let edad = 10;
console.log(`hola mi edad es ${edad}`); //esto muestra bien
console.log("hola mi edad es edad"); //esto no muestra bien la variable ya que toma todo como string
//NOTA `` sirve para concatenar variables dentro del string sin que se reemplacen, ademas las variables se deben escribir dentro de ${variable}


for (let turno = 1; turno <= 7; turno++) { 
    let nombre = prompt("ingrese el nombre");
    alert(`Turno #${turno}, nombre ${nombre}`);
}


for (let i = 0; i < 10; i++) { 
    if (i === 5) { 
        //break; //con el break termino la iteracion
        continue;//si ve que es 5 saltea a la siguiente por ej muestra 0 1 2 3 4 6 7 8 9 (no está el 5)
    }
    console.log(i);
}

/*
ESTRUCTURA WHILE (control previo)

hay que poner una condicion que se cumpla en algun momento
while(algo != algo){
    algo a ejecutar

}
*/
let entrada = prompt("ingrese dato");
while (entrada != "ESC") { //sale cuando se ponga ESC
    alert(`se ingresó ${entrada}`);
    entrada = prompt("ingrese un dato");
}
/* estructura DO WHILE (control al final)
do { 
    coigo a ejecutar por primera vez y cuando la condicion sea verdadera
}while(condicion)
*/


/*
ESTRUCTURA DEL SWITCH (CASE)

switch(variable_a_analizar){
case valor:
    codigo a ejecutar case 1;
    break;

case valor2:
    codigo a ejecutar case 2;
    break;
default:
     codigo a ejecutar cuando valor no coincide con ningun valor anterior
     break;
}
*/
let moneda = "UYU"
switch (moneda) {
    case "ARS":
        console.log("moneda argentina");
        break;

    case "UYU":
         console.log("moneda uruguaya");
        break;
    
    case "USD":
         console.log("moneda estadounidense");
        break;
    default:
        console.log("moneda no reconocida");
        break;

}