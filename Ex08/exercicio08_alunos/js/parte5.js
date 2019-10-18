//5.1
var nome = window.prompt("Qual é o seu nome?")
console.log(nome);
//5.2
var idade = window.prompt("Qual é a sua idade?")
document.getElementById('content').innerHTML = idade;
document.getElementById('idade').placeholder = idade;
//5.3
var p1 = window.prompt("Escreva a palavra 1")
var p2 = window.prompt("Escreva a palavra 2")
document.getElementById('palavra1').value = p1;
document.getElementById('palavra2').value = p2;
//5.4
var cor = window.prompt("Que cor quer pintar o interior da pág?")
document.getElementById('card-body').style.backgroundColor = cor;
//5.5
var metros = window.prompt("Valor em metros")
document.getElementById('metros').value = metros;
var pes = metros*3.2808;
document.getElementById('pes').value = pes;
//5.6
var celcius = window.prompt("Valor em celcius")
document.getElementById('celcius').value = celcius;
var fahrenheit = celcius*1.8 + 32;
document.getElementById('fahrenheit').value = fahrenheit;
