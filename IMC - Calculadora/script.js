const calcularImc = (peso, altura) => peso / (altura * altura);

const definirEstado = (imc) => {
    let mensagem;
    if (imc <= 18.5) {
        mensagem = "abaixo do peso. Atenção!"

    } else if (imc <= 24.9) {
        mensagem = "com o peso ideal. Parabéns!"

    } else if (imc <= 29.9) {
        mensagem = "levemente acima do peso."

    } else if (imc <= 34.9) {
        mensagem = "OBESIDADE Grau I. Atenção"

    } else if (imc <= 39.9) {
        mensagem = "OBESIDADE Grau II. Atenção"

    } else {
        mensagem = "OBESIDADE Grau III. CUIDADO"
    }

    return mensagem;

}

const exibirResultado = () => {
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const $resultado = document.getElementById("resultado");
    const imc = calcularImc(peso, altura);
    const estado = definirEstado(imc);

    $resultado.innerHTML = `${nome}, seu IMC foi de ${imc} você está ${estado}`;
}

const informacoes = () => {
    alert("Autoria: https://github.com/MarcosFelipeBC2211");
}

document.getElementById("calcular").addEventListener('click', exibirResultado)
document.getElementById("informacoes").addEventListener('click', informacoes)