const btn = document.querySelector('#btn');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', async () => {
    resultado.textContent = `Carregando...`;

    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!resposta.ok) throw new Error(`Erro na requisição: ${resposta.status}`);
        
        const usuarios = await resposta.json();
        
        // pegando o primeiro usuário (índice 0)
        resultado.textContent = `Nome: ${usuarios[0].name}`;

    } catch (erro) {

        console.error(erro); 
        resultado.textContent = `Erro: Falha ao carregar os dados.`;
    }
});