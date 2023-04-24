let resultado = document.querySelector('.resultado');
let veredito = document.querySelector('.veredito');
let calcularButton = document.querySelector('.buttonImc');

function calcular() {
    
    resultado.innerText = " Resultado - ";
    veredito.innerText = " Veredito - ";
    let altura = document.querySelector('#altura').value / 100;
    let peso = document.querySelector('#peso').value;

    
    var imcResult = " " + (peso / altura ** 2).toFixed(2);
    var imcVeredito = " ";

    if (imcResult < 18.5) {
        imcVeredito= " Você está magro";
    } else if (imcResult < 24.9) {
        imcVeredito= " Você está normal"
    } else if (imcResult < 29.9) {
        imcVeredito= " Você está com sobrepeso"
    } else if (imcResult < 39.9) {
        imcVeredito= " Você está com obesidade"
    } else if (imcResult > 39.9) {
        imcVeredito= " Você está com obesidade mórbida"
    }
    
    document.querySelector(".resultado").innerText += imcResult;
    document.querySelector(".veredito").innerText += imcVeredito;

}

calcularButton.addEventListener('click', () => calcular());