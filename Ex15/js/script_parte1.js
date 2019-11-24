
window.onload = function () {
  var tamanhoAtual, tamanhoInicial
  tamanhoInicial = parseInt(document.getElementById('content_1').style.fontSize)

  document.getElementById('btn_1_1').onclick = function() {
    mensagem(alinha("content_1","left"));
  }
  document.getElementById('btn_1_2').onclick = function() {
    mensagem(alinha("content_1","right"));
  }
  document.getElementById('btn_1_3').onclick = function() {
    mensagem(alinha("content_1","center"));
  }
  document.getElementById('btn_1_4').onclick = function() {
    mensagem(fundo("content_1","black"));
  }
  document.getElementById('btn_1_5').onclick = function() {
    mensagem(fundo("content_1","gold"));
  }
  document.getElementById('btn_1_6').onclick = function() {
    mensagem(fundo("content_1","white"));
  }
  document.getElementById('btn_1_7').onclick = function() {
    mensagem(tamanho("content_1","1"));
  }
  document.getElementById('btn_1_8').onclick = function() {
    mensagem(tamanho("content_1","-1"));

  }
  document.getElementById('btn_1_0').onclick = function() {
    mensagem(repor('content_1'));
  }
  //11
  document.getElementById('btn_2_1').onclick = function() {
    mensagem(tamanho("content_1","1"));
    mensagem(fundo("content_1","black"));
    mensagem(alinha("content_1","left"));
  }
  document.getElementById('btn_2_2').onclick = function() {
    mensagem(tamanho("content_1","-1"));
    mensagem(alinha("content_1","right"));
  }
  document.getElementById('btn_2_3').onclick = function() {
    mensagem(tamanho("content_1","-1"));
    mensagem(alinha("content_1","right"));
    mensagem(fundo("content_1","gold"));
  }
  //12
  document.getElementById('btn_2_4').onclick = function() {
    sorteia()
  }
  //13
  document.getElementById('btn_2_5').onclick = function(){
    add_text();
  }
  document.getElementById('btn_2_0').onclick = function(){
    repor("content_2");
    document.getElementById('content_2').innerHTML = ''
  }




  function alinha(elemento,estilo){
    document.getElementById(elemento).style.textAlign = estilo
    if (estilo == 'left') {
      return('alinha texto à esquerda')
    }
    if (estilo == 'right') {
      return('alinha texto à direita')
    }
    else {
      return('alinha texto ao centro')
    }
  }
  function fundo(elemento,estilo){
    document.getElementById(elemento).style.backgroundColor = estilo
    if (estilo == 'gold') {
      return ('cor de fundo dourado')
    }
    if (estilo == 'black') {
      return ('cor de fundo preto')
    }
    else {
      return('cor de fundo branca')
    }
  }
  function tamanho(elemento,estilo){
    console.log(estilo);
    tamanhoAtual = parseInt(document.getElementById(elemento).style.fontSize)
    tamanhoAtual += parseInt(estilo)
    document.getElementById(elemento).style.fontSize = tamanhoAtual + 'pt'
    if (tamanhoInicial < tamanhoAtual) {
      return ('Diminuiu o tamanho da fonte')
    }
    else {
      return('Aumentou o tamanho da fonte')
    }
  }
  function repor(elemento){
    document.getElementById(elemento).style.backgroundColor = 'white'
    document.getElementById(elemento).style.textAlign = 'center'
    document.getElementById(elemento).style.fontSize =  '10pt'
    return('-------------- REPOR ----------------------- <br>alinha texto ao centro<br>cor fundo branco')
  }
  function mensagem(msg) {
    document.getElementById('accao_txt').innerHTML =  msg + '<br>' + document.getElementById('accao_txt').innerHTML
  }

  //12
  function sorteia() {
    var num = Math.floor(Math.random()*(9))-1
    console.log(num);
    switch (num) {
      case 0:
        mensagem(alinha("content_1","left"))
        break;
      case 1:
        mensagem(alinha("content_1","right"))
        break;
      case 2:
        mensagem(alinha("content_1","center"))
        break;
      case 3:
        mensagem(fundo("content_1","black"))
        break;
      case 4:
        mensagem(fundo("content_1","gold"))
        break;
      case 5:
        mensagem(fundo("content_1","white"))
        break;
      case 6:
        mensagem(tamanho("content_1","1"))
        break;
      case 7:
        mensagem(tamanho("content_1","-1"))
        break;
      case -1:
        mensagem(repor("content_1"))
        break;
      default:

    }
  }
function add_text(){
  for (var i = 1; i < 8; i++) {
    msg = '<h'+i+'>texto adicionado</h'+i+'>'
    document.getElementById('content_2').innerHTML = msg + document.getElementById('content_2').innerHTML
  }
}

}//fecho do window.onload
