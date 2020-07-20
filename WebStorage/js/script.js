"use strict";

const $btnAdicionar = document.getElementById('adicionar');
const $btnRemover = document.getElementById('excluir');
const $btnAtualizar = document.getElementById('atualizar');
const $btnLimpar = document.getElementById('limpar');
const $autor = document.getElementById('autor');
const $listaDeNomes = document.getElementById('divResultado');

const adicionar = () => {
    let nomes = new Array();
    var nome = prompt( "Qual nome desejas adicionar?" );
    if(existeNomes()){
        nomes = converteEmJason('nomes');
    }
    nomes.push({'nome': nome});
    localStorage.setItem('nomes', converteEmString(nomes));
    atualizarLista();
}

const existeNomes = () => {
    return localStorage.hasOwnProperty('nomes');
}

const converteEmJason = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const converteEmString = (json) => {
    return JSON.stringify(json);
}

const atualizarLista = () => {
    var nome = localStorage.getItem('nome');
    $listaDeNomes.innerHTML = ``;
    if(existeNomes()){
        var json = converteEmJason('nomes');
        json.forEach( key => {
            $listaDeNomes.innerHTML += `<div>${ key.nome }</div>`;
        });
    }
}

const informacaoAutor = () => {
	const info = alert("Copyright © Marcos Felipe Barbosa de Carvalho (DS2-M).");
	return informacao;
}

const remover = () => {
    if(!existeNomes()){
        alert('Não há nenhum nome na lista.');
    }
    else{
        var nome = prompt( "Qual nome desejas remover?");
        var nomes = converteEmJason('nomes');
        var nomesAtualizados = nomes.filter( n => n.nome != nome);
        localStorage.setItem('nomes', converteEmString(nomesAtualizados));
    }
    atualizarLista();
}

const atualizar = () => {
    if( !existeNomes()){
        alert('Não há nenhum nome na lista');
    }
    else{
        var nome = prompt("Qual nome desejas atualizar?");
        var novoNome = prompt( "Insira o novo nome:" );
        var nomes = converteEmJason('nomes');
        var nomesAtualizados = nomes.map( n => { if( n.nome == nome ){
                    return n = {'nome' : novoNome };
                }
                else{
                    return n
                }
            }
        );
        localStorage.setItem( 'nomes', converteEmString( nomesAtualizados ) );
    }
    atualizarLista();
}

const limparNomes = () => {
    localStorage.clear();
    atualizarLista();
}

const inicializaPagina = () => {
    if( existeNomes() ){
        atualizarLista();
    }
}

inicializaPagina();

$btnAdicionar.addEventListener('click', ()=>{adicionar()})
$btnRemover.addEventListener('click', ()=>{remover()})
$btnAtualizar.addEventListener('click', ()=>{atualizar()})
$btnLimpar.addEventListener('click', ()=>{ limparNomes()})
$autor.addEventListener('click', ()=>{ informacaoAutor()})
