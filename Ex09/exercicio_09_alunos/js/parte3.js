//3.1
var texto1 = "1.25px"

document.getElementById('converter').onclick = function(){
  console.log(parseInt(texto1));
  console.log(parseFloat(texto1));
}
//3.2.1
var num1 = 1
var num2 = 2
document.getElementById('converter').onclick = function(){
  console.log(num1 + num2);
}
//3.2.2
var num1 = String(num1)
console.log(typeof num1); //verificação do tipo da variavel
console.log(num1 + num2);
//3.2.3
var num1 = String(num1)
var num2 = String(num2)
console.log(num1 + num2);
