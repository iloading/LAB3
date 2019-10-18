//ex2.1
var texto1, texto2, texto3;
texto1="Meu amigo, isto o que aconteceu foi muito simples, meu amigo."
texto2="O que aconteceu foi que eu chego aqui e sou logo confrontado com certas e determinadas situações, hã?"
texto3="E eu digo: <strong>“Então, mas como é que é?” </strong> e os gajos <strong> “Ah e tal!” </strong> e eu <strong> “Ah e tal, não!, Ah e tal, não!” </strong>"
//ex2.2
document.getElementById('content').innerHTML = texto1;
//ex2.3
document.getElementById('msg').value = texto2;
//ex2.4
document.getElementById('content').innerHTML = texto3;
//ex2.5
document.getElementById('msg').value = texto3;
//2.6
document.getElementById('content').style.backgroundColor = "#ffff00";
document.getElementById('msg').style.backgroundColor = "#ffff00";
//2.7
document.getElementById('content').style.color = "blue";
document.getElementById('msg').style.color = "blue";
//2.8
document.getElementById('content').style.fontSize = "2rem";
document.getElementById('msg').style.fontSize = "2rem";
