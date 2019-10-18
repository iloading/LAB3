//6.1
var texto1 = " Já sei inserir texto em JS"
var txtOriginal;
//6.2
document.getElementById('consola').onclick = function() {
  console.log(texto1);
}
//6.3
document.getElementById('escreve').onclick = function() {
  document.getElementById('textop').innerHTML = texto1;
  document.getElementById('textop').style.fontWeight = 700;
}
//6.4
document.getElementById('apaga').onclick= function() {
  document.getElementById('textop').innerHTML = "";
}
//6.5
document.getElementById('copia').onclick = function() {
  var copiado = document.getElementById('c1').value
  console.log(copiado);
}
//6.6
document.getElementById('apaga').onmouseover = function() {
  txtOriginal = document.getElementById('apaga').innerHTML
  document.getElementById('apaga').innerHTML = "DE CERTEZA?"
  document.getElementById('textop').style.backgroundColor = "red"
  document.getElementById('textop').style.color = "white"
  document.getElementById('textop').style.padding = "25px"
}
//6.7
document.getElementById('apaga').onmouseout = function() {
  document.getElementById('apaga').innerHTML = txtOriginal
  document.getElementById('textop').style.backgroundColor = "white"
  document.getElementById('textop').style.color = "black"
  document.getElementById('textop').style.padding = "0"
}
//6.8
document.getElementById('copia2').onclick = function() {
  document.getElementById('c3').value = document.getElementById('c2').value
}
document.getElementById('copia3').onclick = function() {
  document.getElementById('c2').value = document.getElementById('c3').value
}
//6.9
document.getElementById('boo').onmouseover = function() {
  document.getElementById('boo').style.visibility= "hidden"
  document.getElementById('peekaboo').style.visibility= "visible"
}
document.getElementById('boo').onmouseout = function() {
  document.getElementById('boo').style.visibility= "visible"
  document.getElementById('peekaboo').style.visibility= "hidden"
}
//6.10
document.getElementById('c4').onkeyup = function() {
  document.getElementById('c5').innerHTML = document.getElementById('c4').value
}
//6.11
document.getElementById('c6').onkeyup = function() {
  carateres = document.getElementById('c6').value.length
  carateresRestantes = 500-carateres;
  document.getElementById('c7').innerHTML = carateresRestantes
}
