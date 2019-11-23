// O exercício foi feito às 3 pancadas por isso não tem muitos comentários e o código está um bcs confuso, se tiverem dúvidas digam

var atleta1, velocidade1
var atleta2, velocidade2
var atleta3, velocidade3
var personagemEscolhida
var start1 = true
var som = new Audio("sons/music.mp3")
var winner = new Audio("sons/winner.mp3")
var lost= new Audio("sons/lost.mp3")
var teclaPressionada

function start() {
  document.getElementById('start').src = 'imagens/start_locked.png'
  atleta1.style.position = 'absolute'
  atleta2.style.position = 'absolute'
  atleta3.style.position = 'absolute'
  atleta1.style.left = '10px'
  atleta2.style.left = '10px'
  atleta3.style.left = '10px'
  som.play()
  //4.1.4
  document.getElementById('atleta1').src = 'imagens/atleta1.png'
  document.getElementById('atleta2').src = 'imagens/atleta2.png'
  document.getElementById('atleta3').src = 'imagens/atleta3.png'

  var repetir = setInterval(function() {
    //3.1
    console.log(personagemEscolhida);
    switch (personagemEscolhida) {
      case 1:
        atleta2.style.left = parseInt(atleta2.style.left) + velocidade2 + 'px'
        atleta3.style.left = parseInt(atleta3.style.left) + velocidade3 + 'px'
        break;
      case 2:
        atleta1.style.left = parseInt(atleta1.style.left) + velocidade1 + 'px'
        atleta3.style.left = parseInt(atleta3.style.left) + velocidade3 + 'px'
        break;
      case 3:
        atleta1.style.left = parseInt(atleta1.style.left) + velocidade1 + 'px'
        atleta2.style.left = parseInt(atleta2.style.left) + velocidade2 + 'px'
        break;
      default:

    }


      //3.2
    var posLebre = parseInt(atleta1.style.left)
    var posTartaruga = parseInt(atleta2.style.left)
    var posCaracol = parseInt(atleta3.style.left)

    //5
    window.onkeyup = function teclado(event) {
        teclaPressionada = event.key
        if (teclaPressionada == ' ') {
          switch (personagemEscolhida) {
            case 1:
            if (posLebre > 500){
              atleta1.style.left = parseInt(atleta1.style.left) + 0+ 'px'
            }else {
                atleta1.style.left = parseInt(atleta1.style.left) + velocidade1 + 'px'
              }
              break;
            case 2:
              if (posTartaruga > 500){
                atleta2.style.left = parseInt(atleta2.style.left) + 0+ 'px'
              }else {
                  atleta2.style.left = parseInt(atleta2.style.left) + velocidade2 + 'px'
                }
              break;
            case 3:
            if (posCaracol > 500){
              atleta3.style.left = parseInt(atleta3.style.left) + 0+ 'px'
            }else {
                atleta3.style.left = parseInt(atleta3.style.left) + velocidade3 + 'px'
              }
              break;

          }

        }
      }

    if (posLebre > 500) {
      clearInterval(repetir)
      document.getElementById('start').src = 'imagens/start.png'
      document.getElementById('atleta1').src = 'imagens/atleta1_win.png'
      document.getElementById('atleta1Vitorias').value = parseInt(document.getElementById('atleta1Vitorias').value) + 1;
      start1 = true
      if (personagemEscolhida == 1) {
        som.pause()
        winner.play()
      }
      else {
        som.pause()
        lost.play()
      }

    }
    if (posTartaruga > 500) {
      clearInterval(repetir)
      document.getElementById('start').src = 'imagens/start.png'
      document.getElementById('atleta2').src = 'imagens/atleta2_win.png'
      document.getElementById('atleta2Vitorias').value = parseInt(document.getElementById('atleta2Vitorias').value) + 1;
      start1 = true
      if (personagemEscolhida == 2) {
        som.pause()
        winner.play()
      }
      else {
        som.pause()
        lost.play()
      }
    }
    if (posCaracol > 500) {
      clearInterval(repetir)
      document.getElementById('start').src = 'imagens/start.png'
      document.getElementById('atleta3').src = 'imagens/atleta3_win.png'
      document.getElementById('atleta3Vitorias').value = parseInt(document.getElementById('atleta3Vitorias').value) + 1;
      start1 = true
      if (personagemEscolhida == 3) {
        som.pause()
        winner.play()
      }
      else {
        som.pause()
        lost.play()
      }
    }
  },1)

}
function atletaXinicio(personagem) {
  document.getElementById('div_inicio').style.display = 'none'

  switch (personagem) {
    case 1:
      velocidade1 = personagem*3
      velocidade2 = Math.floor(Math.random()*7)+1
      velocidade3 = Math.floor(Math.random()*7)+1
      break;
    case 2:
      velocidade1 = Math.floor(Math.random()*7)+1
      velocidade2 = personagem*3
      velocidade3 = Math.floor(Math.random()*7)+1
      break;
    case 3:
      velocidade1 = Math.floor(Math.random()*7)+1
      velocidade2 = Math.floor(Math.random()*7)+1
      velocidade3 = personagem*3
      break;
  }

  return (personagem)
}



window.onload = function(){
    atleta1 = document.getElementById('atleta1')
    atleta2 = document.getElementById('atleta2')
    atleta3 = document.getElementById('atleta3')
    //NIVEL 2.7
    document.getElementById('div_inicio').style.display = 'block'
    document.getElementById('atleta1inicio').onclick = function() {personagemEscolhida = atletaXinicio(1)}
    document.getElementById('atleta2inicio').onclick = function() {personagemEscolhida = atletaXinicio(2)}
    document.getElementById('atleta3inicio').onclick = function() {personagemEscolhida = atletaXinicio(3)}
    document.getElementById('start').onclick = function() {
      if (start1 == true) {
        start();
        start1 = false
      }
    }
    document.getElementById('atleta1Vitorias').value = 0
    document.getElementById('atleta2Vitorias').value = 0
    document.getElementById('atleta3Vitorias').value = 0
}
