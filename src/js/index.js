const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener('click', function() {
        const cartaVirada = cartao.querySelector('.carta-virada');

        // virar o cartão
        cartao.classList.toggle('virar'); // toggle => se tem tal classe, então eu tiro e vice-versa

        // mostrar o fundo da carta
        cartaVirada.classList.toggle('mostrar-fundo-carta');
    
        const descricao = cartao.querySelector('.descricao');
        descricao.classList.toggle('esconder');
    });
    
});

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener('click', function (){
    if (cartaoAtual === cartoes.length - 1) return;

    // passo 4 - buscar o cartao que está selecionado e esconder
    esconderCartaoSelecionado();

    // passo 3 - fazer aparecer o proximo card da lista
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function (){
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}