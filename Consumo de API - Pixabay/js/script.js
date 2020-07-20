"use strict";

const pesquisarImagem = async () => {
    
    const imagemSolicitada = document.getElementById('campoPesquisa').value;
    
    console.log(imagemSolicitada);
    const urlBase = await `https://pixabay.com/api/?key=16735874-d33591660e4acb065dd947350&q=${imagemSolicitada}`;
    
    const getApi = await fetch(urlBase);
    
    const json = await getApi.json();
    
    const imagem = await json.hits[0].webformatURL;
    
    const imagemAlternativa = await json.hits[1].largeImageURL;
    
    const divImagem = document.getElementById('imagemResultado')
    divImagem.src = imagem;
    
    const divImagemAlternativa = document.getElementById('imagemResultadoAlternativa')
    divImagemAlternativa.src = imagemAlternativa;
}

const searchBtn = document.getElementById('botaoPesquisa');

const exibir = searchBtn.addEventListener("click", pesquisarImagem);





