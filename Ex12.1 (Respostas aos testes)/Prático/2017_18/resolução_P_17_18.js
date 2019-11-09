//Exercício 1
var n
n = document.getElementById('numero').value
if (isNaN(n) == false) {//se for um número

  if (n>0) {
    alert('O número que introduziu é >0')
  }else {
    alert('O número que introduziu é <0')
  }

}else { //se não for um número
  alert('Introduza um número')
}

//Exercício 2
//1
document.getElementById('substituir').onclick = function () {
  document.getElementById('mensagem').innerHTML = document.getElementById('textoInput').value
}
//2
document.getElementById('apagar').onclick = function () {
  document.getElementById('mensagem').innerHTML = ''
}
//3
document.getElementById('adicionar').onclick = function () {
  document.getElementById('mensagem').innerHTML = '<p>' + document.getElementById('textoInput').value +'</p>'
}

//Exercício 3
//1a
document.getElementById('inicio').style.display = 'none' //esconder a div inicio primeiro
document.getElementById('entrar').onclick = function() {
  document.getElementById('bemvindo').style.display = 'none'
  document.getElementById('inicio').style.display = 'block'
  //1b
  var n1 = Math.floor(Math.random()*(5 - -5 + 1)) -5
  var n2 = Math.floor(Math.random()*(5 - -5 + 1)) -5
  document.getElementById('aleatorio1').innerHTML = n1
  document.getElementById('aleatorio2').innerHTML = n2
}
//2
document.getElementById('calcular').onclick = function() {
  //2a
  var resultado = parseInt(document.getElementById('aleatorio1').innerHTML) +  parseInt(document.getElementById('aleatorio2').innerHTML) //penso que no enunciado está mal, é adição em vez de multiplicação
  //2b
  valorUtilizador = document.getElementById('resultado').value
  if (resultado == valorUtilizador) {
    document.getElementById('mensagem').innerHTML = 'Correto'
  }
  else {
    document.getElementById('mensagem').innerHTML = 'Errado'
  }
}

//Exercício 4
/*
1- 100
2- 100 101
3- 101 101
4- 100 99
*/

//Exercício 5

//1
/*
  O utilizador insere um número para apostar
  Ao clicar uma vez no botão 'aposta', o jogador perde logo 10 créditos, e é iniciada a função temporizador.
  Esta função é invocada 5x pelo que, no total, gera 5 números por click do botão aposta. Caso algum dos 5 números gerados seja igual ao número que o utilizador inseriu, este ganha 50 pontos (um saldo de 40 visto que perdeu 10 ao apostar)
*/

//2
/*
o valor inicial da variável creditos é 50.
Isto porque :
80 = valorInicial - 10 - 10 + 50
Estes -10 correspondem aos 2 cliques (2 apostas feitas pelo utilizador)
o que faz com que :
80 + 20 - 50 = valorInicial
50 = valorInicial
*/
