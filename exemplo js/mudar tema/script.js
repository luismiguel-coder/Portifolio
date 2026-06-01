const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click',  function(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});


btn2.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});


btn3.addEventListener('click', function(){
    if(document.body.style.backgroundColor === 'black'){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});