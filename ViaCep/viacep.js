"use strict";

const encontrarCep = (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch (url).then ( resposta => resposta.json())
                                .then ( dados => preencherFormulario ( dados ));
}

const preencherFormulario = ( endereco ) => {
    document.getElementById ('endereco').value = endereco.logradouro;
    document.getElementById ('bairro').value = endereco.bairro;
    document.getElementById ('estado').value = endereco.uf;
    document.getElementById ('cidade').value = endereco.localidade;
}

document.getElementById ('cep').addEventListener ('blur', ( e ) => encontrarCep (e.target.value));
