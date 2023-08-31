const h1 = document.querySelector('h1');
const input1 = document.querySelector('#dato1');
const input2 = document.querySelector('#dato2');
const resultado = document.querySelector('#resultado');

function btnOnClick() {
    resultado.innerHTML = 'Valores concatenados: ' + input1.value + ' ' +  input2.value;

}


