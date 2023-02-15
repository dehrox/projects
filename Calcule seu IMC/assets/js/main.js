// Capturar evento de submit do formulario

const form = document.querySelector('#formulario'); // Capturar formulario

form.addEventListener('submit', function (e) { // Adiciona evento submit
    e.preventDefault(); // Nao deixa o formulario ser enviado
    const inputPeso = e.target.querySelector('#peso'); // Caputra dados dos input
    const inputAltura = e.target.querySelector('#altura');
    console.log(inputPeso);

    const peso = Number(inputPeso.value);  // Converte input para number
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false); // Checa se o peso não é verdadeiro
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false); /// Checa se a altura não é verdadeiro
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).` // Criamos a mensagem

    setResultado(msg, true); // Setar resultado com a flag true

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // Criamos um array para receber os dados

    if (imc >= 39.9) return nivel[5]; // Invertemos a logica para facilitar

    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) return nivel[2];

    if (imc >= 18.5) return nivel[1];

    if (imc < 18.5) return nivel[0];

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;  // Funcao faz o calculo do IMC
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');  // Funcao que so cria paragrafo
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');  // Funcao que seta o resultado e verifica se e valido
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }


    p.innerHTML = msg;
    resultado.appendChild(p);


}

