//6.2
window.onload= function(){
//4.1
var texto_inicial = document.getElementById('content').innerHTML;
//4.4 e 4.4.3.1 - tem de estar no início devido à ordem de intruções a manipulação do html deve sempre estar primeiro que outras instruções
document.getElementById('botoes').innerHTML += '<button id="posicionar" class="btn btn-primary">Posicionar</button>';
//4.5
document.getElementById('botoes').innerHTML += '<input class="form-control col-md-2" id="posicao">';
//4.2
document.getElementById('adicionar').onclick = function(){
  document.getElementById('content').innerHTML += ("<p>" + texto_inicial + "</p>");
}
//4.3.1
var tamanho = 150;
document.getElementById('reduzir').onclick = function(){
  document.getElementById('alvo').width = tamanho;
}
//4.3.2
document.getElementById('reduzir').onclick = function(){
  document.getElementById('alvo').width = tamanho;
  document.getElementById('alvo').style.position = "absolute";
}
//4.3.3
document.getElementById('reduzir').onclick = function(){
  document.getElementById('alvo').width = tamanho;
  document.getElementById('alvo').style.position = "absolute";
  document.getElementById('alvo').style.top = "-150px";
}

//4.4.1
document.getElementById('posicionar').onclick = function(){
  document.getElementById('alvo').style.left = "-50px";
}
//4.4.2
document.getElementById('posicionar').onclick = function(){
  document.getElementById('alvo').style.left = "-50px";
  document.getElementById('alvo').width = document.getElementById('tamanho').value;
}

//4.4.3.2 O estilo aplicado pelo botão posicionar apenas funciona após clicar no reduzir pq no reduzir mudamos o atributo position para absolute. Só aí é possível mudar a propiedade "left" para -50px.


//4.5.1
/*
document.getElementById('posicionar').onclick = function(){
  document.getElementById('alvo').style.left = document.getElementById('posicao').value ; //no enunciado falta dizsr que é left mas o prof confirmou
}
*/

//4.5.2
/*
document.getElementById('posicionar').onclick = function(){
  var pos = document.getElementById('posicao').value;
  pos = parseInt(pos);
  posX2 = pos * 2;
  document.getElementById('alvo').style.left = posX2 + "px";
}
*/
//4.5.3
document.getElementById('posicionar').onclick = function(){
  var pos = document.getElementById('posicao').value;
  pos = parseInt(pos);
  posMais150 = pos + 150;
  document.getElementById('alvo').style.left = posMais150 + "px";
}




} //fecho da função da linha 2
