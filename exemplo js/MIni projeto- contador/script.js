const btn1 = document.getElementById("#btn1");
btn1.addEventListener("click", function() {
    let contador = document.getElementById("#h1");
    contador.textContent = parseInt(contador.textContent) + 1;
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function() {
    let contador = document.getElementById("#h1");
    contador.textContent = parseInt(contador.textContent) - 1;
    
    if (parseInt(contador.textContent) < 0) {
        alert("O contador não pode ser negativo!");
        contador.textContent = 0;
    }
});