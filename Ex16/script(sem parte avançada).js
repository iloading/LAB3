//declaração de variáveis
//ATENÇÃO MUDAR NA PÁG CSS estilo.css e no ficheiro HTML o id da divAjuda para div_ajuda

var ajudaON = true//5.3
var lampadasAcesas
var jogadorRt$Lf
window.onload = function () {
    carrega_elementos();
};

function carrega_elementos() {
    //1.2
    for (var i = 1; i <= 40; i++) {
      document.getElementById('main').innerHTML += "<img id='lampada" + i + "' alt=apagada src='imagens/lampada_0.png' position='absolute' width='28' height='44' >"
    }
    //1.3
    document.getElementById('main').innerHTML += "<img id='jogador' alt='jogador' src='imagens/jogador_esquerda.png' width='91' height='151'>"

    //2.1
    document.getElementById('jogar_btn').onclick = function() {
      jogar();
      lampadasAcesas = 0
    }

    window.onkeydown = function (event) { //O processa_tecla tem de estar depois da chamada da função jogar() visto que é a função jogar() que dá a posição inicial do jogador, e este dado é necessário para mexer o jogador
      if (ajudaON == false) {//5.3
        processa_tecla(event)
      }
    };

}//fecho da função carrega_elementos()

function jogar() {
  var temporestante = 30
  ajudaON = false//5.3
  //2.2
  document.getElementById('div_ajuda').style.display= 'none'
  //2.3
  //descobrir a tamanho das imagens das lâmpadas e do jogador para descontar no cálculo do random para não saírem do ecrã
  var hImg = document.getElementById('lampada1').height
  var wImg = document.getElementById('lampada1').width
  var hJogador = document.getElementById('jogador').height
  var wJogador = document.getElementById('jogador').width
  //posicionar o jogador
  document.getElementById('jogador').style.top=  Math.floor(Math.random()*(innerHeight - hJogador + 1))  + 'px';
  document.getElementById('jogador').style.left= Math.floor(Math.random()*(innerWidth - wJogador + 1)) + 'px';
  //posicionar cada lâmpada
  for (var i = 1; i <= 40; i++) {
    document.getElementById('lampada'+i).style.top=  Math.floor(Math.random()*(innerHeight - hImg + 1))  + 'px';
    document.getElementById('lampada'+i).style.left= Math.floor(Math.random()*(innerWidth - wImg + 1)) + 'px';
  }
  //8
  var tempo = setInterval(function() {
    temporestante--
    document.getElementById('tempo_txt').value = temporestante
  },1000)
  //5.1
  setTimeout(function() {
    fim_jogo()
  },30000)

}//fecho da função jogar()


function processa_tecla(event) {
  var tecla = event.key
  switch (tecla) { // fiz com wasd para ser mais fácil testar
    case 'w':
        document.getElementById('jogador').style.top = parseInt(document.getElementById('jogador').style.top) -10 + "px"
        detecta_colisao()
      break;
    case 's':
        document.getElementById('jogador').style.top = parseInt(document.getElementById('jogador').style.top) +10 + "px"
        detecta_colisao()
      break;
    case 'a':
        jogadorRt$Lf = false
        document.getElementById('jogador').src = 'imagens/jogador_esquerda.png'//5.2
        document.getElementById('jogador').style.left = parseInt(document.getElementById('jogador').style.left) -10 + "px"
        detecta_colisao()
      break;
    case 'd':
        jogadorRt$Lf = true
        document.getElementById('jogador').src = 'imagens/jogador_direita.png'//5.2
        document.getElementById('jogador').style.left = parseInt(document.getElementById('jogador').style.left) +10 + "px"
        detecta_colisao()
      break;
    default:
      fim_jogo()
  }
  //3.4
  if (parseInt(document.getElementById('jogador').style.top) < -50 ) { //-50 é um número qq que corresponde a tipo a cabeça do gajo, pode ser o que vcs quiserem
    document.getElementById('jogador').style.top = innerHeight- 50 + "px"
  }
  if (parseInt(document.getElementById('jogador').style.top) > innerHeight-50 ) {
    document.getElementById('jogador').style.top = -50 + "px"
  }
  if (parseInt(document.getElementById('jogador').style.left) < -45 ) {
    document.getElementById('jogador').style.left = innerWidth- 45 + "px"
  }
  if (parseInt(document.getElementById('jogador').style.left) > innerWidth-45 ) {
    document.getElementById('jogador').style.left = -45 + "px"
  }

}//fecho da função processa_tecla



function detecta_colisao() {
  for (var i = 1; i <= 40; i++) {
    posLampX= parseInt(document.getElementById('lampada'+i).style.left)
    posLampY= parseInt(document.getElementById('lampada'+i).style.top)
    posJogadorX= parseInt(document.getElementById('jogador').style.left)
    posJogadorY= parseInt(document.getElementById('jogador').style.top)

    if (jogadorRt$Lf == true) {
      if ((posJogadorX+91 >= posLampX) && (posJogadorX+91 <= posLampX+28)) {
        if ((posJogadorY+60 >= posLampY)&& (posJogadorY+60 <= posLampY+44)) {
          if (document.getElementById('lampada'+i).src.search('lampada_0.png') != -1 ) {
            document.getElementById('lampada'+i).src = 'imagens/lampada_1.png'
            lampadasAcesas++
            console.log(lampadasAcesas);
          }
        }
      }
    }
    if (jogadorRt$Lf == false) {
      if ((posJogadorX >= posLampX) && (posJogadorX <= posLampX+28)) {
        if ((posJogadorY+60 >= posLampY)&& (posJogadorY+60 <= posLampY+44)) {
          if (document.getElementById('lampada'+i).src.search('lampada_0.png') != -1)  {
            document.getElementById('lampada'+i).src = 'imagens/lampada_1.png'
            lampadasAcesas++
            console.log(lampadasAcesas);
          }
        }
      }
    }
    //7
    if (lampadasAcesas == 40) {
      fim_jogo()
    }
  }
}

function fim_jogo() {
  //4
  document.getElementById('div_ajuda').style.display = 'block'
  ajudaON = true//5.3
}
