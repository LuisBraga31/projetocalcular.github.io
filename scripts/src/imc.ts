let resultado = document.querySelector('.resultado') as HTMLElement;
let veredito = document.querySelector('.veredito') as HTMLElement;
let calcularButton = document.querySelector('.buttonImc') as HTMLElement;

function calcular() {
    
    resultado.innerText = "";
    veredito.innerText = "";
    let alturaInput = document.querySelector('#altura') as HTMLInputElement;
    let pesoInput = document.querySelector('#peso') as HTMLInputElement;

    let altura: number = parseFloat(alturaInput.value) / 100;
    let peso: number = parseFloat(pesoInput.value);

    
    let imcResult: number = (peso / altura ** 2);
    let imcVeredito: string = " ";

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
    
    resultado.innerText += imcResult.toFixed(2);
    veredito.innerText += imcVeredito;

}

calcularButton.addEventListener('click', () => calcular());