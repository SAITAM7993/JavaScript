//comentario en linea

/*
comentario
de
bloque
*/
//SE UTILIZA camelCase para nombres de variables

//recomendable para declarar variables (USAR ESTA MANERA)
let edad = 10;
let nombre = "prueba con comillas la variable es string";//siempre termina en ;

//NO recomendable para declarar varaibles
var cantidad = 6;

//CONSTANTES, ES RECOMENDABLE USAR MAYUSCULAS para el nombre
const NUMERO = 5;



//tipos de datos
//number
let edad2 = 10;

//string
let varString = "10";


//ejemplos de operaciones

let numeroUno = 5;
let numeroDos = 6;

let suma = numeroUno + numeroDos; //suma de dos nros
let resta = numeroUno - numeroDos;
let mul = numeroUno * numeroDos;
let div = numeroUno / numeroDos; 
let mod = numeroUno % numeroDos; 


console.log("suma",suma);//console.log muestra en consola
console.log("resta",resta);
console.log("mul",mul);
console.log("div" , div);
console.log("mod",mod); //si se pone , lo concatena con espacio
console.log("mod"+mod); //si se pone un + lo concatena sin espacio
//nota, con ALT y flecha se puede mover algo seleccionado


//PROMPT, pedimos que ingrese datos
/*
let nom = prompt("ingrese su nombre"); //hago un prompt que pide un dato y lo guarda en la variable nom
alert("hola " + nom); //salta alerta con hola y el contenido de la variable nom el + concatena como char porque hay un char en la suma
//alert(num+7); hace que salga num concatenado a 7 ya que en alert se toma como string

//si no quisiera que lo tome como char se puede usar alguna funcion para cambiar a nro

//parseInt("6"); agarra un char y lo convierte un nro
//parseFloat("6.45"); pasa un char a decimal
//Number("5"); toma un char y lo deja decimal o entero dependiendo de lo que se ingrese

alert(parseInt("5") + numeroUno);


console.log(typeof(nom)); //typeof es el tipo de datos de la variable que se ingrese


//pasar string a nro, se puede usar Number dentro del alert
alert(Number(numeroUno) + 7) 


//o se puede pasar mismo al pedirlo
prompt(numb)
*/

let nom1 = prompt("ingrese nombre");
alert("su nombre es "+ nom1);

let num1 = Number(prompt("ingrese un nro"));
let num2 = Number(prompt("ingrese otro nro"));
suma = num1 + num2;

alert("la suma de "+num1+ " y "+ num2+ " es "+ suma);
