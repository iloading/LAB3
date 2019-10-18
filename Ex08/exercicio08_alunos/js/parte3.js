//3.1
document.getElementById('btn_texto').onclick = function() {
  alert("Can't touch this");
}
//3.2
var texto ;
texto = "Então eu venho lá de baixo dizem-me não sei quê, chego cá a cima afinal parece que não, em que é que ficamos?"
document.getElementById('content').onmouseover = function() {
  document.getElementById('content').innerHTML = texto;
}
//3.3
document.getElementById('btn_apagar').onclick = function() {
  document.getElementById('content').innerHTML = "";
}
//3.4
document.getElementById('btn_texto').onclick = function() {
  vInput = document.getElementById('input1').value
  console.log(vInput);
}
