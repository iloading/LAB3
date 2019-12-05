var posPlayer
var tempo
var t
var ajudaON = true //isto não é pedido no enunciado mas garante que não é possível mexer o jogador enquanto a div ajuda está no ecrã
var desce

window.onload = function() {
  document.getElementById('tempo').style.backgroundColor = 'black'
  document.getElementById('jogar').onclick = function() {
    document.getElementById('tempo').style.backgroundColor = 'black'
    reiniciar()
  }
}
window.onkeydown = function(event) {
      processa_tecla(event.key)
}
function comeca_jogar() {
  document.getElementById('divAjuda').style.display = 'none'
  ajudaON = false
  document.getElementById('jogador').style.top = '420px'
  posPlayer = parseInt(document.getElementById('jogador').style.top)
  tempo = 15
  document.getElementById('tempo').value= tempo
  t = setInterval(function() {
    tempo--
    document.getElementById('tempo').value= tempo
    if (tempo <= 5) {
      document.getElementById('tempo').style.backgroundColor = 'red'
    }
    if (tempo == 0) {
      clearInterval(t)
      clearInterval(desce)
      document.getElementById('divAjuda').style.display = 'block'
      ajudaON = true
    }
  },1000)
}

function processa_tecla(key) {
  if (ajudaON == false) {
    if(key == ' '){
      if (posPlayer > 200){
        posPlayer -= 5
        document.getElementById('jogador').style.top = posPlayer + 'px'
      }
      if (posPlayer <= 200) {
        for (var i = 1; i<6; i++) {
          posX_Foguete = Math.floor(Math.random()*(600 - 0 + 1))
          posY_Foguete = Math.floor(Math.random()*(100 - 0 + 1))
          document.getElementById('foguete'+i).style.display = 'block'
          document.getElementById('foguete'+i).style.top = posY_Foguete + 'px'
          document.getElementById('foguete'+i).style.left = posX_Foguete + 'px'
        }
          clearInterval(t)
          clearInterval(desce)
          document.getElementById('recomecar').style.display = 'block'
          document.getElementById('recomecar').onclick = function() {
              reiniciar()
          }
        }
      }
    else {
      document.getElementById('divAjuda').style.display = 'block'
      ajudaON = true
      clearInterval(t)
      clearInterval(desce)
    }
  }
}// fecho da função processa_tecla()

function reiniciar() {
    for (var i = 1; i<6; i++) {
      document.getElementById('foguete'+i).style.display = 'none'
    }
      document.getElementById('tempo').style.backgroundColor = 'black'
      document.getElementById('recomecar').style.display = 'none'
      comeca_jogar()
      desce_jogador()
  }

function desce_jogador() {

    desce = setInterval(function() {
      if (posPlayer < 420) {
        posPlayer += 3
        document.getElementById('jogador').style.top = posPlayer + 'px'
      }
      if (posPlayer < 275) {
        posPlayer += 7
        document.getElementById('jogador').style.top = posPlayer + 'px'
      }
    },500)

}
