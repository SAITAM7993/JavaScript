//pedir un nro mediante prompt y sumarle otro en cada rep, realizando una salida por cada resultado
let nro = parseInt(prompt("ingrese un nro"));
for (let i = 1; i <= 2; i++) { 
    alert(`${nro} + ${i} = ${nro + i}`);
}

//pedir texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingresa ESC

let texto = prompt("ingrese un texto");
while (texto != "ESC") { 
    alert(`texto ingresado: ${texto}`);
    texto = prompt("ingrese otro texto");
}

//pedir un nro por prompt, repetir la salida del mensaje hola la cantidad de veces

let nro2 = parseInt(prompt("ingrese un nro"));

for (let i = 1; i <= nro2;i++){
    alert("hola");  
}