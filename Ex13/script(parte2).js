window.onload = function() {
  var acao, tempo, limite
  tempo= 0 // 5
  var audio = new Audio('/sons/som.mp3');

  var b_botao = document.getElementById('btn_botao')
  var b_imagem = document.getElementById('btn_imagem')
  var b_cor = document.getElementById('btn_cor_fundo')
  var b_audio = document.getElementById('btn_audio')
  var div_resultados = document.getElementById('resultados')
  //PARTE2 3)
  document.getElementById('conteudo').innerHTML += '<div id= area_jogo></div>'
  document.getElementById('video').innerHTML += '<button id="btn_video" class="btn btn-primary ml-auto">video</button>'
  document.getElementById('btn_audio').className ='btn btn-primary ml-2'
  document.getElementById('btn_video').className ='btn btn-primary ml-2 mr-auto'
  //PARTE2 1)
   document.getElementById('topo').innerHTML += '<button id="btnJogar" class="btn btn-success">Jogar</button>'
   var botaoJogar = document.getElementById('btnJogar')

   botaoJogar.onclick = function Jogo() {
     botaoJogar.style.display = 'none'
     div_resultados.innerHTML= ''

    var timer = setInterval(function gerador() {
      limite = false //PARTE2 2) cada vez que é gerado, a variavel volta a false para que se possa clicar outra vez

      if (tempo < 14) {//5
        acao = Math.floor(Math.random() * (5- 1 + 1) + 1)
        console.log(acao);
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
            //PARTE2 3
            case 5:
            document.getElementById('area_jogo').innerHTML = '<video autoplay width="320"height="240" controls><source src="puppy_sleep.mp4" type="video/mp4"></video>'
            break;
        }

      }
      else {// acabar os 15 segundos ( a variável tempo atingir o valor 15)

        clearInterval(timer)
        //6
        document.getElementById('area_jogo').style.backgroundColor = 'inherit' //limpar o conteudo da div
          document.getElementById('area_jogo').innerHTML = '<img src="imagens/gameover.jpeg">'
        botaoJogar.style.display = 'inline-block'
        tempo = 0;
      }
          tempo++
    },1000)

    //VERIFICAÇÃO 4)
    //PARTE2 2) Adicionar os limites em cada função
    b_botao.onclick = function () {
      if (limite == false) {
        limite = true
       if (acao == 1) {
         div_resultados.innerHTML+= '<img src="imagens/check.png">'
       }else {
          div_resultados.innerHTML+= '<img src="imagens/cross.png">'
       }
      }
    }
    b_imagem.onclick = function () {
    if (limite == false) {
      limite = true
     if (acao == 2) {
       div_resultados.innerHTML+= '<img src="imagens/check.png">'
     }else {
        div_resultados.innerHTML+= '<img src="imagens/cross.png">'
     }
    }
  }
    b_cor.onclick = function () {
    if (limite == false) {
      limite = true
     if (acao == 3) {
       div_resultados.innerHTML+= '<img src="imagens/check.png">'
     }else {
        div_resultados.innerHTML+= '<img src="imagens/cross.png">'
     }
    }
  }
    b_audio.onclick = function () {
    if (limite == false) {
      limite = true
     if (acao == 4) {
       div_resultados.innerHTML+= '<img src="imagens/check.png">'
     }else {
        div_resultados.innerHTML+= '<img src="imagens/cross.png">'
     }
    }
  }
    //5

  }//fecho do onclick do botao jogar
}
