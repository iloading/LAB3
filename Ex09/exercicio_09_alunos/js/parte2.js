//2.1 - Havia um erro no código HTML na ligação ao JS, façam download da navo versão no elearning, ou corrijam o código HTML

var nome_primeiro = "Zé"
var nome_apelido = "Manel"
var nome_completo = nome_apelido + "," + nome_primeiro
console.log(nome_completo);
//2.2
var dia, mes, ano
dia = window.prompt("Insira o dia")
mes = window.prompt("Insira o mês")
ano = window.prompt("Insira o ano")
alert(dia + " de " + mes + " de " + ano)

//2.3
var num1, num2, num3, resultado
num1 = 10
num2 = 20
num3 = 30

resultado = "Divisão: " + num2/num1
console.log(resultado);
resultado = "Módulo: " + num2%num1
console.log(resultado);
resultado = num1*num2 - num3/num1
console.log(resultado);
resultado = String(num1) + String(num2) //String() força as variáveis a serem strings, ou seja, texto
console.log(resultado);
