const input = document.querySelector('#inputData');
const btnSalvar = document.querySelector('#showData');
btnSalvar.addEventListener('click', () => {
    const valor = input.value;
    sessionStorage.setItem('dados', valor);
    console.log('Dados mostrados no console ' + sessionStorage.getItem('dados'));
    alert('Dados salvos na sessão!');
});