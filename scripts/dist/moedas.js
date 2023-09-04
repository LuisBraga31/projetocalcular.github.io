"use strict";
let moedaSelecionada = document.querySelector('.moedas-seletor select');
let valorRef = document.querySelector('.moedas-seletor input');
let buttonRef = document.querySelector('.buttonRef');
let valorReal = document.querySelector(".valorReal");
let valor1 = document.querySelector(".valor1");
let valor2 = document.querySelector(".valor2");
let textValor;
let textResultado1;
let textResultado2;
function conversor() {
    if (moedaSelecionada.value === '1') {
        converteEuro();
    }
    else if (moedaSelecionada.value === '2') {
        converteDolar();
    }
    else if (moedaSelecionada.value === '3') {
        converteReal();
    }
    else {
        alert('Error');
    }
}
function converteEuro() {
    let valor = parseFloat(valorRef.value) * 1;
    let realConv = valor * 5.57;
    let dolarConv = valor * 1.10;
    valorReal.innerText = ` ${valor.toFixed(2)} €`;
    valor1.innerText = ` ${realConv.toFixed(2)} R$`;
    valor2.innerText = ` ${dolarConv.toFixed(2)} $`;
}
function converteDolar() {
    let valor = parseFloat(valorRef.value) * 1;
    let realConv = (valor * 5.06);
    let euroConv = (valor * 0.91);
    valorReal.innerText = ` ${valor.toFixed(2)} $`;
    valor1.innerText = ` ${realConv.toFixed(2)} R$`;
    valor2.innerText = ` ${euroConv.toFixed(2)} €`;
}
function converteReal() {
    let valor = parseFloat(valorRef.value) * 1;
    let euroConv = valor * 0.18;
    let dolarConv = valor * 0.20;
    valorReal.innerText = ` ${valor.toFixed(2)} R$`;
    valor1.innerText = ` ${euroConv.toFixed(2)} €`;
    valor2.innerText = ` ${dolarConv.toFixed(2)} $`;
}
buttonRef.addEventListener('click', () => conversor());
