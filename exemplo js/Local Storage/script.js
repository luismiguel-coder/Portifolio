const nomeInput = document.querySelector('#nome');
const salvarBtn = document.querySelector('#salvar');
const carregarBtn = document.querySelector('#carregar');
const nomeExibido = document.querySelector('#resultado');

salvarBtn.addEventListener('click', () => {
    const nome = nomeInput.value;
    localStorage.setItem('nome', nome); 
    nomeInput.value = '';
    alert('Nome salvo no Local Storage!');

});

carregarBtn.addEventListener('click', () => {
    const nomeSalvo = localStorage.getItem('nome'); 
    if (nomeSalvo) {
        nomeExibido.textContent = `Nome carregado: ${nomeSalvo}`;
    } else {
        nomeExibido.textContent = 'Nenhum nome encontrado no Local Storage.';
    }
});
