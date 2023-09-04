let moedaSelecionada = document.querySelector('.moedas-seletor select') as HTMLSelectElement;
let valorRef = document.querySelector('.moedas-seletor input') as HTMLInputElement;
let buttonRef = document.querySelector('.buttonRef') as HTMLButtonElement;

let valorReal = document.querySelector(".valorReal") as HTMLElement;
let valor1 = document.querySelector(".valor1") as HTMLElement;
let valor2 = document.querySelector(".valor2") as HTMLElement;

let textValor: string;
let textResultado1: string;
let textResultado2: string;

function conversor(): void {

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

function converteEuro() {

    let valor: number = parseFloat(valorRef.value)*1;
    let realConv: number = valor*5.57;
    let dolarConv: number = valor*1.10;

    valorReal.innerText = ` ${valor.toFixed(2)} €`;
    valor1.innerText = ` ${realConv.toFixed(2)} R$`;
    valor2.innerText = ` ${dolarConv.toFixed(2)} $`;

}

function converteDolar(): void {

    let valor: number = parseFloat(valorRef.value)*1;
    let realConv: number = (valor*5.06);
    let euroConv: number = (valor*0.91);

    valorReal.innerText = ` ${valor.toFixed(2)} $`;
    valor1.innerText = ` ${realConv.toFixed(2)} R$`;
    valor2.innerText = ` ${euroConv.toFixed(2)} €`;

}

function converteReal(): void {

    let valor: number = parseFloat(valorRef.value)*1;
    let euroConv: number = valor*0.18;
    let dolarConv: number = valor*0.20;

    valorReal.innerText = ` ${valor.toFixed(2)} R$`;
    valor1.innerText = ` ${euroConv.toFixed(2)} €`;
    valor2.innerText = ` ${dolarConv.toFixed(2)} $`;

}


buttonRef.addEventListener('click', () => conversor());