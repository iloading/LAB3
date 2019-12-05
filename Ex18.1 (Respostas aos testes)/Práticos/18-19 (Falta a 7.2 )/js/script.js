var time
var clock = 30
var audio = new Audio('assets/audio/buzina.mp3')
var tecla

window.onload = function() {
  carrega_elementos()
  escolha_carro()
  //adicionaElementos()
}

//3
window.onkeydown = function(event) {
  tecla = event.key
  processa_tecla(tecla)
}
//5
window.onkeyup = function(event) {
  if (event.key == 'h') {
    audio.play()
  }
}

//1.1
function carrega_elementos() {
  for (let i = 1; i <=10; i++) {
    document.getElementById('personagens').innerHTML += "<img src='assets/imagens/carro" + i + ".png' id='carro" + i + "'>"
    }

  }//fecho da função carrega_elementos()

  //1.2
  function escolha_carro() {
//RESOLVIDO SEM O THIS ESCOLHAM APENAS UM DELES
    for (let num_carro = 1; num_carro <= 10; num_carro++) {
        document.getElementById('carro'+num_carro).onclick = function() {

            jogar(num_carro)
            tempo();

        }
    }

//RESOLVIDO COM O THIS ESCOLHAM APENAS UM DELES
    for (let n_carro = 1; n_carro <= 10; n_carro++) {
      document.getElementById('carro'+n_carro).onclick = function() {
        carroE = this.id;
        //1.3
        clock = 30 // reset do clock sempre que se clica para jogar outra vez
        jogar(carroE)
        tempo() //4
      }

    }

  }//fecho da função escolha_carro()

  //2
  function jogar(n_carro) {
    clock = 30
    document.getElementById('tempo_txt').innerHTML = clock
    let carroEscolhido = "<img src='assets/imagens/carro"+ n_carro + ".png' id='carro_escolhido'>"
    //2.1
    document.getElementById('personagens').style.display = 'none'
    //2.2
    document.getElementById('jogo').style.display = 'block'
    //2.3
    document.getElementById('pista').style.display = 'block'
    document.getElementById('pista').innerHTML += "<img src='assets/imagens/pista.png' id='pistaCorrida'>"
    //2.4
    document.getElementById('pista').style.top = '400px'
    document.getElementById('pista').style.left = '50px'
    //2.5
    document.getElementById('pista').innerHTML += carroEscolhido
    //2.6
    document.getElementById('carro_escolhido').style.top = '400px'
    document.getElementById('carro_escolhido').style.left= '50px'

  }//fecho da função jogar()

//3
function processa_tecla(tecla) {
  let carro = document.getElementById('carro_escolhido')
  let cordY_carro = parseInt(carro.style.top)
  let cordX_carro = parseInt(carro.style.left)
  //3.2
  if (cordX_carro <=20 || cordX_carro>=450) {
    switch (tecla) {
      case 'w':
        carro.style.top = cordY_carro - 10 + 'px';
        carro.style.transform = 'rotate(0deg)'
        break;

      case 's':
        carro.style.top = cordY_carro + 10 + 'px';
        carro.style.transform = 'rotate(180deg)'
        break;
    }
  }
  if (cordY_carro<=0 || cordY_carro>=400) {
    switch (tecla) {
      case 'a':
        carro.style.left = cordX_carro - 10 + 'px';
        carro.style.transform = 'rotate(270deg)'
        break;
      case 'd':
        carro.style.left = cordX_carro + 10 + 'px' ;
        carro.style.transform = 'rotate(90deg)'
        break;
    }
  }
}

function tempo() {
  time = setInterval(function() {
    clock--
    console.log(clock);
    document.getElementById('tempo_txt').innerHTML = clock
    if (clock == 0) {
      clearInterval(time)
      document.getElementById('personagens').style.display = 'block'
      document.getElementById('pista').innerHTML = '' //se usar display none , ao reiniciar vamos ficar com duas pistas e dois carros
    }
  },1000)
}

//PARTE 4 7.2 POR FAZER
function adicionaElementos() {
  wMax = parseInt(document.getElementById('jogo').width)
  hMax =  parseInt(document.getElementById('jogo').height)
  for (var i = 1; i <= 50; i++) {
    nObj = Math.floor(Math.random()*(3-1+1)+1)
    document.getElementById('objectos').innerHTML += "<img src='assets/imagens/objecto"+ nObj + ".png' id='obj"+i+"'>"
    wImg = parseInt(document.getElementById('obj'+i).width)
    hImg = parseInt(document.getElementById('obj'+i).height)

    console.log('wMax= '+ wMax + 'hMax= '+ hMax );
    console.log(wImg, hImg);
    posX = Math.floor(Math.random()*(1062 - wImg +1))
    posY = Math.floor(Math.random()*(857 - hImg +1))
    document.getElementById('obj'+i).style.position = 'absolute'
    document.getElementById('obj'+i).style.top = posY + 'px'
    document.getElementById('obj'+i).style.left = posX + 'px'

  }
}
