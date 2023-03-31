
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        destivarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);
        
        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function destivarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}
