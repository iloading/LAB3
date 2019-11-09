//Exercício 1
var num, n1, n2, r1
n1 = document.getElementById('numero1').value
n2 = document.getElementById('numero2').value
num = n2*n1 //no enunciado diz num*n1 mas perguntei ao stor e ele corrigiu pq "num" tem que ter um valor inicial, caso contrário é NaN e vai dar erro, não está especificado no enunciado

if (num%2 == 0) {
  r1 = num + n2
  if (r1 > 100) {
    console.log(r1);
  }
}else {
  console.log('Número Inválido');
}

//Exercício 2
var consumo, marca, combustao
combustao = false;
consumo = document.getElementById('consumo').value
if (consumo < 2) {
  console.log('Veiculo Plug-in');
}else if (consumo > 2 && consumo <5) {
  console.log('Veículo híbrido');
}else if (consumo > 5 && consumo <7.5) {
  console.log('Veículo a gasolina');
  combustao = true
}else if (consumo > 7.5) {
  console.log('Veículo a gasóleo');
  combustao = true
}
if (combustao == true) {
  marca = document.getElementById('marca').value
  switch (marca) {
    case 'Hyundai':
      modelo = 'Ionic';
      break;
    case 'Opel':
      modelo =  'Ampera';
      break;
    case 'Nissan':
      modelo = 'Leaf';
      break;
    case 'Renault':
      modelo = 'Zoe';
      break;

    default:
      modelo = 'Bicicleta';
  }
  console.log(marca + ': ' + modelo);
}

//Exercício 3

/* 1
Nas respetivas linhas do código JS os acontecimentos serão:
1- guardar o elemento h1 na variável elemento
2- mudar o conteúdo do h1 para "Nvovo parágrafo"
3- mudar o tamanho de letra do conteúdo do h1 para 40px
4- mudar a cor de letra do conteúdo do h1 para vermelho
5- mudar o path do ficheiro, para outra imagem, do elemento HTML img
6- fazer com que o elemento img fique escondido, mudando o seu display para 'none'
*/

//2
//2.1
document.getElementById('calculo').innerHTML = 'a' + document.getElementById('calculo').innerHTML

//2.2
var texto = document.getElementById('textoInput').value
var verificar = isNaN(Math.floor(texto))
if (verificar == true) {
  document.getElementById('textoInput').className += 'validation_error'
}

//2.3
document.getElementById('pic').src = 'superpic.png'

//2.4
document.getElementById('id1').style.visibility = 'hidden' //com display='none' a posição no DOM não é conservada
document.getElementById('calculo').innerHTML = ''

//Exercício 4
//1
window.onload = function() {
  document.getElementById('principal').style.display = 'none'
  document.getElementById('entrar').onclick = function() {
    document.getElementById('inicio').style.display = 'none'
    document.getElementById('principal').style.display = 'block'
  }
//2
  document.getElementById('calcular').onclick = function() {
    var randomValor1 = Math.floor(Math.random() * (3 - -3 + 1)) + (-3)
    var randomValor2 = Math.floor(Math.random() * (3 - -3 + 1)) + (-3)
    //Math.floor(Math.random() * (max - min + 1)) + min (gerar um numero entre o maximo e o minimo, inclusive)
    var resultado = randomValor1 + randomValor2
    document.getElementById('mensagem').innerHTML += '<p>' + resultado + '</p>'
  }
//3
    document.getElementById('verificar').onclick = function() {
      if (resultado < 5) {
        document.getElementById('mensagem_nova').innerHTML = 'O valor aleatório é inferior a 5'
      }
    }
}

//Exercício 5
//1.1
window.onload = function() {
  var tempo, pontos, n1, n2
  tempo = 10
  pontos = 20

  document.getElementById('left').src = 'imgs/black_blue.png'
  document.getElementById('right').src = 'imgs/black_red.png'
//1.2
  document.getElementById('start').onclick = function() {
    inicia_jogo()
  }
//1.3
  document.getElementById('cards').onclick = function() {
    gerar_cartas()
  }
//2
  function inicia_jogo() {
    //2.1
    document.getElementById('start').style.display = 'none'
    //2.2
    //3
    var temporizador = setInterval(function conta_tempo() {
      //3.1
      tempo--
      document.getElementById('tempo').value = tempo
      //3.2
      if (tempo == 0) {
        clearInterval(temporizador)
      }
    }, 1000)
  }

//4
  function gerar_cartas() {
    //4.1
    n1 = Math.floor(Math.random() * (10 - 1 + 1)) +1
    n2 = Math.floor(Math.random() * (10 - 1 + 1)) +1
    //4.2
    document.getElementById('left').src = 'imgs/carta ' + n1 + '.png'
    document.getElementById('right').src = 'imgs/carta ' + n2 + '.png'
  }
}
