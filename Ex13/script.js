window.onload = function() {
  var acao, tempo
  tempo= 0 // 5
  var audio = new Audio('/sons/som.mp3');

  var b_botao = document.getElementById('btn_botao')
  var b_imagem = document.getElementById('btn_imagem')
  var b_cor = document.getElementById('btn_cor_fundo')
  var b_audio = document.getElementById('btn_audio')
  var div_resultados = document.getElementById('resultados')

  //1
  document.getElementById('conteudo').innerHTML += '<div id= area_jogo></div>'

  var timer = setInterval(function gerador() {
    if (tempo < 14) {//5
      acao = Math.floor(Math.random() * (4 - 1 + 1) + 1)
      //3
      document.getElementById('area_jogo').innerHTML = ''
      document.getElementById('area_jogo').style.backgroundColor = 'inherit'

      switch (acao) {
        case 1://2.1
          document.getElementById('area_jogo').innerHTML = '<button type="button">Click Me!</button>'
          break;
        case 2://2.2
          document.getElementById('area_jogo').innerHTML = '<img src="imagens/img.png">'
          break;
        case 3://2.3
          document.getElementById('area_jogo').style.backgroundColor = 'red'
          break;
        case 4:
            audio.play()
          break;
      }
      
      //VERIFICAÇÃO 4)
      b_botao.onclick = function () {
       if (acao == 1) {
         div_resultados.innerHTML+= '<img src="imagens/check.png">'
       }else {
          div_resultados.innerHTML+= '<img src="imagens/cross.png">'
       }
      }
      b_imagem.onclick = function () {
       if (acao == 2) {
         div_resultados.innerHTML+= '<img src="imagens/check.png">'
       }else {
          div_resultados.innerHTML+= '<img src="imagens/cross.png">'
       }
      }
      b_cor.onclick = function () {
       if (acao == 3) {
         div_resultados.innerHTML+= '<img src="imagens/check.png">'
       }else {
          div_resultados.innerHTML+= '<img src="imagens/cross.png">'
       }
      }
      b_audio.onclick = function () {
       if (acao == 4) {
         div_resultados.innerHTML+= '<img src="imagens/check.png">'
       }else {
          div_resultados.innerHTML+= '<img src="imagens/cross.png">'
       }
      }

      //5
      tempo++
    }else {// acabar os 15 segundos ( a variável tempo atingir o valor 15)

      clearInterval(timer)
      //6
      document.getElementById('area_jogo').style.backgroundColor = 'inherit' //limpar o conteudo da div
      document.getElementById('area_jogo').innerHTML = '' //limpar o conteudo da div
      document.getElementById('area_jogo').innerHTML = '<img src="imagens/gameover.jpeg">'
    }
  },2000)

}
