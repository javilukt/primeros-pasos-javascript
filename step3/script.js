// para obtener el primero que cumple

const h1 = document.querySelector('h1');
const p1 = document.querySelector('p#iduno');
const p2 = document.querySelector('p#iddos');
const pClase = document.querySelector('p.myclass');
const pId = document.querySelector('p#myid');
const input = document.querySelector('input');
const div = document.querySelector('div');

// modificar el valor 
//  - como html
p1.innerHTML = 'hola<br>adios';
//  - como texto
p2.innerText = 'hola<br>adios';

// acceso a atributos
// ejemplo -> obtener clase de pClase
console.log(pClase.getAttribute('class'));
// ejemplo -> cambiar la propiedad case de input
input.setAttribute('class','myclassiinput');
console.log(input.getAttribute('class'));
// ejemplo -> cambiar la clase 
input.classList.add('claseuno', 'clasedos', 'clasetres');
console.log(input.getAttribute('class'));
input.classList.remove('claseuno', 'clasedos');
console.log(input.getAttribute('class'));
input.classList.toggle('clasecien');  // si la tiene la quita y viceversa
input.classList.contains('clasecien');  // indica el elemento tiene la clase

// Crear elemento

const img = document.createElement('img');
img.src = "https://media.istockphoto.com/id/1445256568/es/foto/c%C3%B3digo-de-programaci%C3%B3n-de-ne%C3%B3n.jpg?s=612x612&w=0&k=20&c=J1pw0vV-oOIQC6PiGpg2KgyXiev8BYLZHSP81gMrKik=";
div.append(img);
