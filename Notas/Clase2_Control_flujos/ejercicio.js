
let nombre = prompt("ingrese nombre");
if (nombre != "") {
    alert("su nombre es: " + nombre);
}    
else {
    alert("debe ingresar nombre")
}

let nro = prompt("ingrese nro");
if (nro > 1000) { 
    alert("nro mayor a 1000");
    
} else {
    alert("nro menor a 1000");
}

let nro2 = prompt("ingrese otro nro");

if (nro2 >= 10 && nro2<= 50) {
    alert("nro2 entre 10 y 50");
} else {
    alert("nro NO está entre 10 y 50");
}