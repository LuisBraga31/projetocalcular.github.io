
function insert(num) {
    var numeroDigitado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numeroDigitado + num;
}

function limpar() {
    document.querySelector('#resultado').innerHTML = "";
}

function apagar() {
    var resultado = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {

    var resultado = document.querySelector('#resultado').innerHTML;

    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }

}
