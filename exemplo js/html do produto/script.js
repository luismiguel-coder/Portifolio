const botoesExcluir = document.querySelectorAll('.btn-excluir');

botoesExcluir.forEach((botao) => {
    botao.addEventListener('click', async () => {
        const id = botao.dataset.id;
        const url = botao.dataset.url;
        
        try {
            const resposta = await fetch(url, { method: "DELETE" });
            if (resposta.ok) {
                document.querySelector(`#produto-${id}`).remove();
            }
        } catch (erro) { 
            console.error('Erro ao excluir o produto:', erro); 
        }
    });
});
