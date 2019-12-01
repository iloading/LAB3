//NOTA : quando virem let em vez de var , é a mesma coisa , mas let serve para declarar uma variável apenas dentro de uma função, essa variável não é reconhecida fora da função (tem a ver com os scopes), usando let poupa-se memória. Nestes programas pequenos pode não influenciar muito mas, por exemplo no projeto, já pode ser importante.

var ovosRecolhidos = 0
var direcaoDireita = true
var colisao = false


window.onload = function () {
  carrega_elementos()
}
window.onkeydown = function(event) {
  processa_tecla(event.key)
}



function carrega_elementos() {
  //1.2
  for (i = 1; i < 7; i++) {
    document.getElementById('main').innerHTML += "<img src='imagens/ovo.png' id='ovo" + i + "'>"
    }
  //1.3
  document.getElementById('main').innerHTML += "<img src='imagens/jogador.png' id='player'>"
  //1.4
  document.getElementById('btn_jogar').onclick = function() {
    comeca_jogar()
  }
}//fecho da função carrega_elementos()

function comeca_jogar() {
  ovosRecolhidos = 0
  //2.1
  document.getElementById('div_ajuda').style.display = "none"
  //2.2
  document.getElementById('txt_ovos').innerHTML = ovosRecolhidos

  //dados do player
  let limE_player = 0
  let limD_player = 0.2 * 750 - document.getElementById('player').width
  let posV_player = 300 - document.getElementById('player').height

  //dados dos ovos
  let limE_ovo = 0.2 * 750
  let limD_ovo = 750 - (0.2*750) - document.getElementById('ovo1').width
  let posV_ovo =  300 - document.getElementById('ovo1').height

  //chamda da função para o player
  posiciona_elemento('player', limE_player , limD_player, posV_player );

  //chamda da função para os ovos
  for (a = 1; a < 7; a++) {
    document.getElementById('ovo'+a).style.display = 'block' // reiniciar
    posiciona_elemento('ovo'+a , limE_ovo , limD_ovo , posV_ovo)
  }


}//fecho da função comeca_jogar()


function posiciona_elemento(id , limiteEsquerdo, limiteDireito, posicaoVertical) {
  posHorizontal = Math.floor(Math.random()*(limiteDireito - limiteEsquerdo + 1) + limiteEsquerdo)
  document.getElementById(id).style.left = posHorizontal + 'px'
  document.getElementById(id).style.top = posicaoVertical + 'px'

} //fecho da função posiciona_elemento()


function processa_tecla(tecla) {
  if (document.getElementById('div_ajuda').style.display != 'block') { //não deixa mexer o jogador quando a div ajuda está ativa
    switch (tecla) {
      case 'a':
        if (parseInt(document.getElementById('player').style.left) >= 15) { //7.4 só pode ir até à posição 15 pois 15-15 dá 0 e fica dentro do ecrã. se estivesse na posição 10, por exemplo, 10-15=-5 e sairía fora do ecrã.
          move_objeto('player', 15, 'esq')
        }
        else { //caso a subtração de 15 torne a posição do player <0 ele adquire a posição 0. isto previne o que acontece na resolução do pdf, em que o joador fica parcialmente fora do ecrã
          document.getElementById('player').style.left = '0px'
        }
        break;
      case 'd':
        if (parseInt(document.getElementById('player').style.left) <= 695 ) { //7.4 só pode ir até aos 695 porque ele tem 40px de comprimento ou seja, na posição 695, ele está na verdade até à posição 735. Ou seja, se estivesse na posição 696, ao adicionar mais 15px de movimento iria sair do ecrã pois iria estar verdadeiramente na posição 751px.
          move_objeto('player', 15, 'dir')
        }
        else { //caso o incremento de 15 torne a posição do jogador >710 (750 na realidade), ele adquire a posição 710 (750 na realidade), isto previne o que acontece na resolução do pdf, em que o joador fica parcialmente fora do ecrã
          document.getElementById('player').style.left = '710px'
        }

        break;
      default:
    }
  }
  for (b = 1; b<7; b++) {
    if (document.getElementById('ovo'+b).style.display != 'none') { //só contabiliza 1x cada ovo
      detetou = deteta_colisao('player', document.getElementById('player').width, 'ovo'+b, document.getElementById('ovo1').width);
      if (detetou == true) {
        document.getElementById('ovo'+b).style.display = 'none'
        ovosRecolhidos++
        document.getElementById('txt_ovos').innerHTML = ovosRecolhidos
      }
    }
    if (ovosRecolhidos == 6) {
      fim_jogo()
    }
  }


} //fecho da função processa_tecla()

function move_objeto(id , vel , sentido) {
    if (sentido == 'esq') {
      //7.3 mudança de direção
      if (direcaoDireita == true) {
        document.getElementById(id).style.transform = 'rotateY(180deg)';
        direcaoDireita = false
      }
      //7.2 movimento
      document.getElementById(id).style.left = parseInt(document.getElementById(id).style.left) - vel + 'px'
    }
    if (sentido == 'dir') {
      //7.3 mudança de direção
      if (direcaoDireita == false) {
        document.getElementById(id).style.transform = 'rotateY(0deg)';
        direcaoDireita = true
      }
      //7.2 movimento
      document.getElementById(id).style.left = parseInt(document.getElementById(id).style.left) + vel + 'px'
    }
} //fecho da função move_objeto()

function deteta_colisao(o1_id, o1_largura, o2_id, o2_largura) {
  let cord_Esq_o1 = parseInt(document.getElementById(o1_id).style.left)
  let cord_Esq_o2 = parseInt(document.getElementById(o2_id).style.left)
  let cord_Dir_o1 = cord_Esq_o1 + parseInt(o1_largura)
  let cord_Dir_o2 = cord_Esq_o2 + parseInt(o2_largura)

  if ( (cord_Esq_o1 >= cord_Esq_o2) && (cord_Esq_o1 <= cord_Dir_o2)) {
    colisao = true
  }
  else if ( (cord_Dir_o1 > cord_Esq_o2) && (cord_Dir_o1 <= cord_Dir_o2)) {
    colisao = true
  }
  else if ( (cord_Esq_o1 <= cord_Esq_o2) && (cord_Dir_o1 >= cord_Dir_o2)) {
    colisao = true
  }
  else {
    colisao= false
  }
  return colisao
}

function fim_jogo() {
  document.getElementById('div_ajuda').style.display = 'block'
}
