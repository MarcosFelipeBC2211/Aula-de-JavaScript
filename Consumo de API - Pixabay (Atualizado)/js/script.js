"use strict";

const pesquisarImagem = async () => {
    
    const imagemSolicitada = document.getElementById('campoPesquisa').value;
    
    console.log(imagemSolicitada);
    const urlBase = await `https://pixabay.com/api/?key=16735874-d33591660e4acb065dd947350&q=${imagemSolicitada}`;
    
    const getApi = await fetch(urlBase);
    
    const json = await getApi.json();
    
    const imagem = await json.hits[1].webformatURL;
    const imagem2 = await json.hits[2].webformatURL;
    const imagem3 = await json.hits[3].webformatURL;
    const imagem4 = await json.hits[4].webformatURL;
    const imagem5 = await json.hits[5].webformatURL;
    const imagem6 = await json.hits[6].webformatURL;
    const imagem7 = await json.hits[7].webformatURL;
    const imagem8 = await json.hits[8].webformatURL;
    const imagem9 = await json.hits[9].webformatURL;
    const imagem10 = await json.hits[10].webformatURL;
    const imagem11 = await json.hits[11].webformatURL;
    const imagem12 = await json.hits[12].webformatURL;
    
    
    const divImagem = document.getElementById('imagem1')
    divImagem.src = imagem;
    const divImagem2 = document.getElementById('imagem2')
    divImagem2.src = imagem2;
    const divImagem3 = document.getElementById('imagem3')
    divImagem3.src = imagem3;
    const divImagem4 = document.getElementById('imagem4')
    divImagem4.src = imagem4;
    const divImagem5 = document.getElementById('imagem5')
    divImagem5.src = imagem5;
    const divImagem6 = document.getElementById('imagem6')
    divImagem6.src = imagem6;
    const divImagem7 = document.getElementById('imagem7')
    divImagem7.src = imagem7;
    const divImagem8 = document.getElementById('imagem8')
    divImagem8.src = imagem8;
    const divImagem9 = document.getElementById('imagem9')
    divImagem9.src = imagem9;
    const divImagem10 = document.getElementById('imagem10')
    divImagem10.src = imagem10;
    const divImagem11 = document.getElementById('imagem11')
    divImagem11.src = imagem11;
    const divImagem12 = document.getElementById('imagem12')
    divImagem12.src = imagem12;
    
}

const searchBtn = document.getElementById('botaoPesquisa');

const exibir = searchBtn.addEventListener("click", pesquisarImagem);



