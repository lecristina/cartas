// OBJETIVO 1 - ao clicar na seta de avançar, temos que mostrar o próximo card da lisra 

// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener('click', function (){
    if (cartaoAtual === cartoes.length - 1) {
        return;
    }

    // passo 4 - buscar o cartao que está selecionado e esconder
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

    // passo 3 - fazer aparecer o proximo card da lista
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');
});


// OBJETIVO 2 - Ao clicar na seta de voltar, mostrar o cartão anterior da lista

// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar

// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar

// passo 3 - fazer aparecer o card anterior da lista

// passo 4 - buscar o cartao que está selecionado e esconder

const btnVoltar = document.getElementById('btn-voltar');

btnVoltar.addEventListener('click', function (){
    if (cartaoAtual === 0) {
        return;
    }

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');
});

// REFATORAÇÃO

// const btnAvancar = document.getElementById('btn-avancar');
// const btnVoltar = document.getElementById('btn-voltar');
// const cartoes = document.querySelectorAll('.cartao');
// let cartaoAtual = 0;

// // passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
// btnAvancar.addEventListener('click', function (){
//     if (cartaoAtual === cartoes.length - 1) return;

//     // passo 4 - buscar o cartao que está selecionado e esconder
//     esconderCartaoSelecionado();

//     // passo 3 - fazer aparecer o proximo card da lista
//     cartaoAtual++;
//     mostrarCartao(cartaoAtual);
// });

// const btnVoltar = document.getElementById('btn-voltar');

// btnVoltar.addEventListener('click', function (){
//     if (cartaoAtual === 0) return;

//     esconderCartaoSelecionado();

//     cartaoAtual--;
//     mostrarCartao(cartaoAtual);
// });

// function mostrarCartao(cartaoAtual) {
//     cartoes[cartaoAtual].classList.add("selecionado");
// }

// function esconderCartaoSelecionado() {
//     const cartaoSelecionado = document.querySelector('.selecionado');
//     cartaoSelecionado.classList.remove('selecionado');
// }