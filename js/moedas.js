let moedaSelecionada = document.querySelector('.moedas-seletor select');
let valorRef = document.querySelector('.moedas-seletor input');
let buttonRef = document.querySelector('.buttonRef');

var textValor = "";
var textResultado1 = "";
var textResultado2 = "";

function conversor () {

    if (moedaSelecionada.value === '1') {
        converteEuro();
    } else if (moedaSelecionada.value === '2') {
        converteDolar();
    } else if (moedaSelecionada.value === '3') {
        converteReal();
    } else {
        alert('Error');
    }

}

function converteEuro () {

    let valor = (valorRef.value*1).toFixed(2);
    let realConv = (valor*5.57).toFixed(2);
    let dolarConv= (valor*1.10).toFixed(2);

    document.querySelector(".valorReal").innerText = ` ${valor} €`;
    document.querySelector(".valor1").innerText = ` ${realConv} R$`;
    document.querySelector(".valor2").innerText = ` ${dolarConv} $`;

}

function converteDolar () {

    let valor = (valorRef.value*1).toFixed(2);
    let realConv = (valor*5.06).toFixed(2);
    let euroConv= (valor*0.91).toFixed(2);

    document.querySelector(".valorReal").innerText = ` ${valor} $`;
    document.querySelector(".valor1").innerText = ` ${realConv} R$`;
    document.querySelector(".valor2").innerText = ` ${euroConv} €`;

}

function converteReal () {

    let valor = (valorRef.value*1).toFixed(2);
    let euroConv = (valor*0.18).toFixed(2);
    let dolarConv= (valor*0.20).toFixed(2);

    document.querySelector(".valorReal").innerText = ` ${valor} R$`;
    document.querySelector(".valor1").innerText = ` ${euroConv} €`;
    document.querySelector(".valor2").innerText = ` ${dolarConv} $`;

}


buttonRef.addEventListener('click', () => conversor());