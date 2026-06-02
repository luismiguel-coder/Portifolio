const input = document.querySelector('#tarefa');
const btn = document.querySelector('#add');
const lista = document.querySelector('#lista');

btn.addEventListener('click', () => {
    const tarefa = input.value;
    if (tarefa) {
        const li = document.createElement('li');
        li.textContent = tarefa;
        lista.appendChild(li);
        input.value = '';
    }
});
