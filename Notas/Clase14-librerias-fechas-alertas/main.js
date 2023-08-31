//SWEETALERT (alertas)
let boton = document.getElementById("alerta");
boton.addEventListener("click", () => { 
    Swal.fire({
        title: "error",
        text: "blabla",
        showCancelButton: true,
        confirmButtonText: "ok",
    }).then((result) => {
        if (result.isConfirmed) {
            
            Swal.fire({
                title: `${result.value}`
            });
        }
    });
});

//TOASTIFY (alertas chicas)
let boton2 = document.getElementById("toasty"); 
boton2.addEventListener("click", () => { 
    Toastify({
        text: "click aqui para probar",
        duration: 3000,
        destination: "https://www.coderhouse.com",
    }).showToast();
});

//LUXON (fechas) los tiempos arrancan de 0 no de 1
const DateTime = luxon.DateTime;
/*
const dt = DateTime.local(2023, 8, 22);
console.log(dt);*/

const now = DateTime.now();
console.log(now.toLocaleString()); // 22/8/2023
console.log(now.toLocaleString(DateTime.DATE_FULL)); //22 de agosto de 2023 18:43
console.log(now.toLocaleString(DateTime.DATE_SIMPLE)); // 22 de agosto de 2023
console.log(now.setLocale("en").toLocaleString(DateTime.DATE_FULL)); //cambia el idioma... August 22, 2023

//con plus se puede sumar (now es la variable de fecha)
const suma = now.plus({ hours: 1, minutes: 10 }); //suma una hora y 10 min
const resta = now.minus({ month: 1, days: 2 }); //resta un mes y dos dias


//interval

const Interval = luxon.Interval;
const later = DateTime.local(2023, 12, 24);

const i = Interval.fromDateTimes(now, later); //puedo obtener un intervalo, desde, hasta

console.log(i.length('days'));
console.log(i.length('hours'));
console.log(i.length('minutes'));