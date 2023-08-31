// para obtener el primero que cumple

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pClase = document.querySelector('p.myclass');
const pId = document.querySelector('p#myid');
const input = document.querySelector('input');
console.log({h1, p, pClase, pId, input});

// para obtener listas de los que cumplen

const h1s = document.querySelectorAll('h1');
const ps = document.querySelectorAll('p');
const psClase = document.querySelectorAll('p.myclass');
const psId = document.querySelectorAll('p#myid');
const inputs = document.querySelectorAll('input');
console.log({h1s, ps, psClase, psId, inputs});

console.log(input.value);