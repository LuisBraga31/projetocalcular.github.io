let result = document.getElementById('resultado') as HTMLElement;

function insert(num: number): void {
    let numeroDigitado: string = result.innerHTML;
    result.innerHTML = numeroDigitado + num;
}

function limpar(): void {
    result.innerHTML = "";
}

function apagar(): void {
    let resultado: string = result.innerHTML;
    result.innerHTML = resultado.substring(0, resultado.length -1);
}

function calculadora(): void {

    let resultado: string = result.innerHTML;

    if(resultado) {
        result.innerHTML = eval(resultado);
    } else {
        result.innerHTML = "Nadinha...";
    }

}