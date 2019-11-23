
var atleta1
var atleta2
var atleta3
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
    atleta1.style.left = parseInt(atleta1.style.left) + 6 + 'px'
    atleta3.style.left = parseInt(atleta3.style.left) + 3 + 'px'

      //3.2
    var posLebre = parseInt(atleta1.style.left)
    var posTartaruga = parseInt(atleta2.style.left)
    var posCaracol = parseInt(atleta3.style.left)

    //5
    window.onkeyup = function teclado(event) {
        teclaPressionada = event.key
        console.log(teclaPressionada);
        if (teclaPressionada == ' ') {
          if (posTartaruga > 500){
            atleta2.style.left = parseInt(atleta2.style.left) + 0+ 'px'
          }else {
              atleta2.style.left = parseInt(atleta2.style.left) + 20+ 'px'
          }
        }
      }

    if (posLebre > 500) {
      clearInterval(repetir)
      document.getElementById('start').src = 'imagens/start.png'
      document.getElementById('atleta1').src = 'imagens/atleta1_win.png'
      document.getElementById('atleta1Vitorias').value = parseInt(document.getElementById('atleta1Vitorias').value) + 1;
      som.pause()
      lost.play()
    }
    if (posTartaruga > 500) {
      clearInterval(repetir)
      document.getElementById('start').src = 'imagens/start.png'
      document.getElementById('atleta2').src = 'imagens/atleta2_win.png'
      document.getElementById('atleta2Vitorias').value = parseInt(document.getElementById('atleta2Vitorias').value) + 1;
      som.pause()
      winner.play()
    }
    if (posCaracol > 500) {
      clearInterval(repetir)
      document.getElementById('start').src = 'imagens/start.png'
      document.getElementById('atleta2').src = 'imagens/atleta3_win.png'
      document.getElementById('atleta3Vitorias').value = parseInt(document.getElementById('atleta2Vitorias').value) + 1;
      som.pause()
      lost.play()
    }
  },100)



}



window.onload = function(){
    atleta1 = document.getElementById('atleta1')
    atleta2 = document.getElementById('atleta2')
    atleta3 = document.getElementById('atleta3')

    document.getElementById('start').onclick = function() {start()}
    document.getElementById('atleta1Vitorias').value = 0
    document.getElementById('atleta2Vitorias').value = 0
    document.getElementById('atleta3Vitorias').value = 0
}
