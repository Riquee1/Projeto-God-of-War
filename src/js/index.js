const botoescarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoescarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');

        if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }
        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        imagens[indice].classList.add('ativa');
    });
});