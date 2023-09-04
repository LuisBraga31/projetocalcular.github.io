"use strict";
let result = document.getElementById('resultado');
function insert(num) {
    let numeroDigitado = result.innerHTML;
    result.innerHTML = numeroDigitado + num;
}
function limpar() {
    result.innerHTML = "";
}
function apagar() {
    let resultado = result.innerHTML;
    result.innerHTML = resultado.substring(0, resultado.length - 1);
}
function calculadora() {
    let resultado = result.innerHTML;
    if (resultado) {
        result.innerHTML = eval(resultado);
    }
    else {
        result.innerHTML = "Nadinha...";
    }
}
