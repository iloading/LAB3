window.onload = function () {

  //8
  var audioToupeira = new Audio();
  var audioApanhar = new Audio();
  var audioFundo = new Audio();
  audioToupeira.src = "sons/toupeira.mp3"
  audioApanhar.src = "sons/boing.mp3"
  audioFundo.src = "sons/background.mp3"

  //variáveis
  var toupeirasSaidas, toupeirasApanhadas, wToupeira, hToupeira, wBrowser, hBrowser, posX, posY, timer, reiniciar, tempoAleatorio
  reiniciar = false
  //9
  var click = false
  var duracao = 1
  toupeirasSaidas = 1;
  toupeirasApanhadas = 0;


  //1a)
  document.getElementById('toupeira').style.display = 'none'

  //7a)b)
  document.getElementById('btn_jogar').onmouseover = function () {
    document.getElementById('btn_jogar').src = 'imagens/botaoJogarOver.png'
  }
  document.getElementById('btn_jogar').onmouseout = function () {
    document.getElementById('btn_jogar').src = 'imagens/botaoJogar.png'
  }

  document.getElementById('btn_jogar').onclick = function jogar(){
  if (reiniciar == false) {
    //2a)
    document.getElementById('toupeira').style.display = 'block'
    document.getElementById('btn_jogar').style.display = 'none'
    //2b)
    document.getElementById('toupeiras_saidas').innerHTML = toupeirasSaidas
    document.getElementById('toupeiras_apanhadas').innerHTML = toupeirasApanhadas
    //2c)
    wToupeira = document.getElementById('toupeira').width
    hToupeira = document.getElementById('toupeira').height
    wBrowser = window.innerWidth
    hBrowser = window.innerHeight
    posX = parseInt(Math.random() * (wBrowser - wToupeira + 1)) + 'px'
    posY = parseInt(Math.random() * (hBrowser - hToupeira + 1)) + 'px'
    document.getElementById('toupeira').style.top = posY
    document.getElementById('toupeira').style.left = posX
    audioToupeira.play();

    //8c)
    audioFundo.play()
    //8d)
      var start = true
        document.getElementById('som_controlo').onclick = function () {
          if (start == true) {
            audioFundo.pause()
            document.getElementById('som_controlo').src = 'imagens/mute.png'
            start = false
          }
          else {
            audioFundo.play()
            document.getElementById('som_controlo').src = 'imagens/unmute.png'
            start = true
          }
      }

      //2d)
      timer = setInterval( function() {
        //AVANÇADO
        //gerar um numero entre 400 e 800
        tempoAleatorio = Math.floor(Math.random() * (800 - 400) ) + 400;
        console.log(tempoAleatorio);
        //a toupeira fica invisivel passado esse numero aleatorio
        document.getElementById('toupeira').style.display = 'block'
        setTimeout(function visivel() {
          document.getElementById('toupeira').style.display = 'none'
        },tempoAleatorio)
        //3a
        posX = parseInt(Math.random() * (wBrowser - wToupeira + 1)) + 'px'
        posY = parseInt(Math.random() * (hBrowser - hToupeira + 1)) + 'px'
        document.getElementById('toupeira').style.top = posY
        document.getElementById('toupeira').style.left = posX
        //3b
        ++toupeirasSaidas;
        document.getElementById('toupeiras_saidas').innerHTML = toupeirasSaidas
        //5a)
        document.getElementById('toupeira').src= 'imagens/mole.png'
        //8a)
        audioToupeira.play();
        //9
        click = false // sempre que uma nova toupeira é gerada, a variavel passa a false permitindo que o utilizador clique outra vez (uma única vez)

        //AVANÇADO - DURAÇÃO VAI SER DE 30 SEGUNDOS
        duracao++
        if (duracao == 30) {
            clearInterval(timer)
            //6b
            document.getElementById('btn_jogar').style.display = 'block'
            reiniciar = true
        }
      }, 1000);//fecho so setInterval de 1 em 1 segundo

    }else { //Quando reiniciar == true vai reiniciar as variáveis para um novo jogo
        toupeirasSaidas = 1;
        toupeirasApanhadas = 0;
        duracao = 1
        reiniciar = false
        document.getElementById('btn_jogar').click()
      }

  }//fecho da função jogar



  //4
  document.getElementById('toupeira').onclick = function toupeira() {
    if (click == false) { //9 só conta a primeira fez que o utilizador clica
      //4a
      toupeirasApanhadas++
      click = true
      //4b
      document.getElementById('toupeira').src= 'imagens/mole-dead.png'
      document.getElementById('toupeiras_apanhadas').innerHTML = toupeirasApanhadas
      //8b)
      audioApanhar.play();
    }
  }





}//fecho do window.onload
