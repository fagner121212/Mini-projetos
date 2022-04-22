/* Vamos selecionar todos os elementos do html */
var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var img = document.getElementById('img');
var automatic = document.getElementById('automatic');

/* Vamos adicionar o evento de click e uma função em cada elemento */
red.addEventListener("click", function(){
    //alert('Você selecionou o botão vermelho');
    img.src="img/vermelho.png";
});

yellow.addEventListener("click", function(){
    //alert('Você selecionou o botão amarelo');
    img.src="img/amarelo.png";
});

green.addEventListener("click", function(){
    //alert('Você selecionou o botão verde');
    img.src="img/verde.png";
});

automatic.addEventListener("click", function(){
    setInterval(function(){
        console.log('Sinal vermelho');
        img.src="img/vermelho.png";
    }, 10000);

    setInterval(function(){
        console.log('Sinal verde');
        img.src="img/amarelo.png";
    }, 15000);

    setInterval(function(){
        console.log('Sinal amarelo');
        img.src="img/verde.png";
    }, 29000);
})

img.addEventListener("click", function(){
    alert('Pegamos a img');
});

