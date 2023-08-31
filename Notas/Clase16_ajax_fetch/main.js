/*
AJAX

peticiones HTTP, es el protocolo que permite enviar peticiones a un servidor

ESTRUCTURA de una petición
    *Url
    *metodo (GET obtener info, POST permite enviar info de modo mas seguro CREAR recurso, PUT actualizar, DELETE borrar) (hace referencia a cual es la intencion que se tiene con el servidor)
    *Headers
    *Body
    *Parámetros (QUERY PARMS O URL PARMS)
   
 API
 peticion http construida del lado del servidor

 FETCH (es una promesa)
 permite hacer peticiones JS a servidores
*/


//listado donde se mostrarán las publicaciones en la pagina

/*
let listado = document.getElementById("listado"); 
//llamada al servidor para traer con el fetch las publicaicones
fetch("https://jsonplaceholder.typicode.com/posts") //hago la peticion http, coloco una url
    .then((response) => response.json()) //.json es otra promesa response es la llamada, response.json es la respuesta obtenida   
    .then((data) => {
        //recorremos todas las publicaciones traidas del servidor
        data.forEach((publicacion) => {
            const li = document.createElement("li");
            li.innterHTML = `
                <h2>${publicacion.title}</h2>
                <p>${publicacion.title}</p>
            `;
            listado.append(li);
            //console.log(info.title);
            //console.log(info.body); //porque en el arreglo veo que los atributos title y body
        });

    }); //esa promesa json la obtengo en data, este .then es de response.json()

*/

/*
//ejemplo 2 pasandole el objeto y dando de ALTA (POST)
fetch("https://jsonplaceholder.typicode.com/posts"), ({
    method: "POST",
    body: JSON.stringify({
        title: 'primera publicacion',
        body: 'probando',
        userId: 1,
    }),
    headers: {
        "Content-type": 'application/json; charset=UTF-8'
    },
}) 
.then((response) => response.json())
    .then((data) => console.log(data));

*/

//ASYNC - AWAIT - nueva forma de hacer las peticiones, LA FORMA ANTERIOR es mas larga de escribir y se usaba antes

let listado = document.getElementById("listado");
//funcion para pedir productos
const pedirProductos = async() => {  //se pone async antes del () para poder utilizar el await
    try{//se deberia poner siempre dentro de un try para que intente conectarse
        const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //con el await se espera a que el fetch termine
        const data = await response.json();
        data.forEach(item => { 
            const li = document.createElement("li");
                li.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.title}</p>
                `;
            listado.append(li);
        })
    }catch(error) {//el catch atrapa el error y se puede hacer algo dependiendo de eso
        console.log(error);
    }
    
}
//pedirProductos();


const trello = async() => {  //se pone async antes del () para poder utilizar el await
    try {//se deberia poner siempre dentro de un try para que intente conectarse
        
        const token = await fetch("https://trello.com/1/authorize?expiration=never&scope=read,write,account&response_type=token&name=Server%20Token&key=a859a0640b627f202756b0605164b852")
        console.log(token.json());
        
      //  const response = await fetch("https://api.trello.com/1/lists/635194a4602b3a02c8806d9b?key=a859a0640b627f202756b0605164b852&token=3622bc7951488902b8fef63f88b39779209188"); //con el await se espera a que el fetch termine
      //  const data = await response.json();
        /*
        data.forEach(item => { 
            const li = document.createElement("li");
                li.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.title}</p>
                `;
            listado.append(li);
        })*/
    }catch(error) {//el catch atrapa el error y se puede hacer algo dependiendo de eso
        console.log(error);
    }
    
}
trello();