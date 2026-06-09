const btn = document.querySelector('#buscar');
const resultado = document.querySelector('#resultado');
const cepInput = document.querySelector('#cep');

btn.addEventListener('click', async () => {
    const cep =  cepInput.value.replace(/\D/g, '');
    if (cep === '') {
        'Por favor, insira um CEP válido.';
        return;
    }
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            resultado.textContent = 'CEP não encontrado.';
        } else {
            resultado.textContent = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade}/${data.uf}`;
        }
    } catch (error) {
        resultado.textContent = 'Erro ao buscar CEP.';
    }

});