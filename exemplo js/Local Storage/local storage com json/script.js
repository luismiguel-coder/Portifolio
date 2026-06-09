const nomeInput = document.querySelector('#nome');
const salvarBtn = document.querySelector('#salvar');
const carregarBtn = document.querySelector('#carregar');
const nomeExibido = document.querySelector('#resultado');

salvarBtn.addEventListener('click', () => {
    const nome = nomeInput.value;
    localStorage.setItem('nome', JSON.stringify(nome));
    nomeInput.value = '';
    alert('Nome salvo no Local Storage!');

});

carregarBtn.addEventListener('click', () => {
    const nomeSalvo = localStorage.getItem('nome'); 
    const nome = JSON.parse(nomeSalvo);
    if (nome) {
        nomeExibido.textContent = `Nome carregado: ${nome}`;
    } else {
        nomeExibido.textContent = 'Nenhum nome encontrado no Local Storage.';
    }
});
