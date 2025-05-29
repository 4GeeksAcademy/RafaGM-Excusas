

window.onload = function() {
  //write your code here
  function generadorDeExcusas() {
let quien = ['El perro', 'Mi Madre', 'El correo', 'Mi Pajaro'];
let hace = ['comí', 'oriné', 'rompí', 'aplasté'];
let que = ['mi tarea', 'mi telefono', 'el coche'];
let donde = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacia ejercicio', 'durante mi almuerzo', 'mientras rezaba oraba'];

let quienaleatorio = quien[Math.floor(Math.random()* quien.length)];
let hacealeatorio = hace[Math.floor(Math.random()* hace.length)];
let quealeatorio = que[Math.floor(Math.random()* que.length)];
let dondealeatorio = donde[Math.floor(Math.random()* donde.length)];


let excusas = `${quienaleatorio} ${hacealeatorio} ${quealeatorio} ${dondealeatorio}`;
document.getElementById("excusas").innerHTML = excusas;
}
generadorDeExcusas()
}
