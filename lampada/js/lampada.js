var ligada = document.getElementById('turnOn');

ligada.addEventListener("click", function(){
    var lamp = document.getElementById('lamp');
    lamp.src="img/ligada.jpg";
});

var desligada = document.getElementById('turnOff');

desligada.addEventListener("click", function(){
    var lamp = document.getElementById('lamp');
    lamp.src="img/desligada.jpg";
});

var lamp = document.getElementById('lamp');

lamp.addEventListener("click",function(){
    lamp.src="img/quebrada.jpg"
});



console.log(ligada);
