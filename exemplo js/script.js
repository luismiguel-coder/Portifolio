const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    alert('Bem vindo ao javascript');
    console.log("Clicou no botão");
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    let titulo = prompt("Digite o novo titulo: "); 
    document.getElementById("titulo").innerHTML = titulo;
    console.log(`o titulo foi alterado para ${titulo}`);
})


//let titulo = document.getElementById("titulo");

//titulo.innerHTML = "Mudança com JS";


//let idade;
//idade = 20;
//console.log(idade);

