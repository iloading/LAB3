window.onload = function inicio() {
//1.1 e 1.2
var nRespostasCorretas = 0
var nRespostasErradas = 0
var operador, n1, n2
document.getElementById('btn_jogar').onclick = function jogar() {
  document.getElementById('entrada').style.display = 'none';
  document.getElementById('jogo').style.display = 'block'

//1.3
var arrayOperadores = [
  "+",
  "-",
  "x",
  "/"
];

n1 = Math.floor((Math.random() * 10))
n2 = Math.floor((Math.random() * 10))
n3 = Math.floor((Math.random() * 10))
operador1 = arrayOperadores[Math.floor(Math.random()*arrayOperadores.length)];
operador2 = arrayOperadores[Math.floor(Math.random()*arrayOperadores.length)];

//1.4
document.getElementById('op1').value = operador1
document.getElementById('op2').value = operador2
document.getElementById('n1').value = n1
document.getElementById('n2').value = n2
document.getElementById('n3').value = n3
//3.0
//Maneira que está implementada no link da resolução no pdf do exercício:
document.getElementById('resultado').value = ''
/* Maneira que é pedida no enunciado:
  document.getElementById('resultado').onfocus = function reset() {
  document.getElementById('resultado').value = ''
}
*/

} //fecho da função jogar (tudo que está aqui dentro é lido quando se clica no botão Jogar)

//2
document.getElementById('btn_verificar').onclick = function verificar(){
var resultadoVerdadeiro , resultadoUtilizador, correto

if (operador1 == "+" && operador2 == "+") {
  resultadoVerdadeiro = n1 + n2 + n3
}
if (operador1 == "+" && operador2 == "-") {
  resultadoVerdadeiro = n1 + n2 - n3
}
if (operador1 == "-" && operador2 == "+") {
  resultadoVerdadeiro = n1 - n2 + n3
}
if (operador1 == "-" && operador2 == "-") {
  resultadoVerdadeiro = n1 - n2 - n3
}
if (operador1 == "x" && operador2 == "x") {
  resultadoVerdadeiro = n1 * n2 * n3
}
if (operador1 == "x" && operador2 == "/") {
  resultadoVerdadeiro = n1 * n2 / n3
}
if (operador1 == "x" && operador2 == "+") {
  resultadoVerdadeiro = n1 * n2 + n3
}
if (operador1 == "x" && operador2 == "-") {
  resultadoVerdadeiro = n1 * n2 - n3
}
if (operador1 == "/" && operador2 == "/") {
  resultadoVerdadeiro = n1 / n2 / n3
}
if (operador1 == "/" && operador2 == "x") {
  resultadoVerdadeiro = n1 / n2 * n3
}
if (operador1 == "/" && operador2 == "+") {
  resultadoVerdadeiro = n1 / n2 + n3
}
if (operador1 == "/" && operador2 == "-") {
  resultadoVerdadeiro = n1 / n2 - n3
}
if (operador1 == "-" && operador2 == "/") {
  resultadoVerdadeiro = n1 - n2 / n3
}
if (operador1 == "-" && operador2 == "x") {
  resultadoVerdadeiro = n1 - n2 * n3
}
if (operador1 == "+" && operador2 == "/") {
  resultadoVerdadeiro = n1 + n2 / n3
}
if (operador1 == "+" && operador2 == "x") {
  resultadoVerdadeiro = n1 + n2 * n3
}

//2.1
resultadoUtilizador = document.getElementById('resultado').value
if (resultadoUtilizador != '') {
  if (parseInt(resultadoVerdadeiro) == parseInt(resultadoUtilizador)) {
    correto = true
  } else {
    correto = false
  }
  //2.2
  if (correto == true) {
    nRespostasCorretas += 1
    document.getElementById('certas').innerHTML = "Respostas certas: " + nRespostasCorretas
    document.getElementById('modal-body').innerHTML = "Resposta CORRETA!!!!"
    document.getElementById('modal-feedback-pic').src = '../img/correct.gif'
    document.getElementById('btn_modal').click()

  } else {
    nRespostasErradas += 1
    document.getElementById('erradas').innerHTML = "Respostas erradas: " + nRespostasErradas
    document.getElementById('modal-body').innerHTML = "Resposta ERRADA!!!!"
    document.getElementById('modal-feedback-pic').src = '../img/incorrect.gif'
    document.getElementById('btn_modal').click()
  }

//2.3 e 2.4
  document.getElementById('entrada').style.display = 'block';
  document.getElementById('jogo').style.display = 'none'

//Se o utilizador não insirir nenhum valor :
} else {
  document.getElementById('modal-body').innerHTML = "Resposta ERRADA!!!! <p> Insira um valor </p>"
  document.getElementById('btn_modal').click()
}

}//fecho da função verificar (tudo que está aqui dentro é lido quando se clica no botão verificar)
}
